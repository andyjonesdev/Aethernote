//package imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

//local imports
const { environment } = require('./config');
const routes = require('./routes');
const isProduction = environment === 'production';

const app = express();

//middleware
app.use(morgan('dev'));             //logging information about requests and responses:
app.use(cookieParser());            //parsing cookies
app.use(express.json());            //parsing JSON bodies of requests with Content-Type of "application/json"
app.use(helmet({                    //helps set a variety of headers to better secure app
      contentSecurityPolicy: false
}));
// app.use(
//       csurf({
//         cookie: {
//           secure: isProduction,
//           sameSite: isProduction && "Lax",
//           httpOnly: true
//         }
//       })
// );
if (!isProduction) {
  app.use(cors());
}
app.use(routes);

//regular middleware to catch requests that do not match any defined routes
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});
//error handler middleware to process Sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});
//last error handler to format all the errors before returning a JSON response
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});

module.exports = app;

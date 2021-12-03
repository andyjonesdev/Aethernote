//package imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

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
app.use(
      csurf({
        cookie: {
          secure: isProduction,
          sameSite: isProduction && "Lax",
          httpOnly: true
        }
      })
);

if (!isProduction) {
      app.use(cors());
}
app.use(routes);


module.exports = app;

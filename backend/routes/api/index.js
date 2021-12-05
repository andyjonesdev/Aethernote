const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser, requireAuth } = require('../../utils/auth.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// test for frontend CSRF protection
// router.post('/test', function(req, res) {
//       res.json({ requestBody: req.body });
// });

// tests for auth middleware routes
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-duck'
//       }
// });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// router.get(
//       '/restore-user',
//       restoreUser,
//       (req, res) => {
//         return res.json(req.user);
//       }
// );

// router.get(
//       '/require-auth',
//       requireAuth,
//       (req, res) => {
//         return res.json(req.user);
//       }
//     );


module.exports = router;

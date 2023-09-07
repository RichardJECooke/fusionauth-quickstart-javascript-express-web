var express = require('express');
var router = express.Router();

router.get(
  '/login',
  passport.authenticate('oauth2', {
    successRedirect: '/account',
    failureRedirect: '/',
  })
);

module.exports = router;
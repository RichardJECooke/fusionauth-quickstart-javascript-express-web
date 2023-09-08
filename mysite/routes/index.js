const express = require('express');
const passport = require('passport');

const router = express.Router();

function checkAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) res.redirect('/login');
  return next();
}

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', passport.authenticate('oauth2'));

router.get(
  '/auth/callback',
  passport.authenticate('oauth2', {
    successRedirect: '/account',
    failureRedirect: '/',
  })
);

router.get('/logout', function (req, res, next) {
  req.logOut();
  res.redirect('/');
});

router.get('/account', checkAuthenticated, function (req, res, next) {
  res.render('account', { title: 'Express' });
});

router.get('/change', checkAuthenticated, function (req, res, next) {
  res.render('change', { title: 'Express' });
});

module.exports = router;

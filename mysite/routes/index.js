var router = express.Router();
const passport = require('passport');

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(
  '/login',
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

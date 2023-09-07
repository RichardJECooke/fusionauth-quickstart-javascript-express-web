require('dotenv/config');
const session = require('express-session');
const passport = require('passport');
const oauthStrategy = require('passport-oauth2');

function setupPassport(app) {
  app.use(
    session({
      secret: 's3cr3t',
      resave: false,
      saveUninitialized: true,
    })
  );

  const authOptions = {
    authorizationURL: `${process.env.AUTH_URL}/authorize`,
    tokenURL: `${process.env.AUTH_URL}/token`,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK_URL,
  };

  passport.use(
    new oauthStrategy.Strategy.OAuth2Strategy(authOptions, function (
      accessToken,
      refreshToken,
      profile,
      cb
    ) {
      const token = jwt_decode(accessToken);
      const error = null;
      return cb(error, token.email);
    })
  );

  passport.serializeUser((user, callback) => {
    callback(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use(passport.initialize()); // init passport on every route call
  app.use(passport.session()); //allow passport to use "express-session"
}

module.exports = setupPassport;

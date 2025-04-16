# FusionAuth Express Quickstart

## Documentation

This repository is documented at https://fusionauth.io/docs/quickstarts/quickstart-javascript-express-web.

Further reading:
- [Express security best practice](https://expressjs.com/en/advanced/best-practice-security.html)
- [Passport.js authentication concepts](https://www.passportjs.org/concepts/authentication/downloads/html)
- [Passport.js Oauth2](https://github.com/jaredhanson/passport-oauth2)
- [FusionAuth OAuth Docs](https://fusionauth.io/docs/v1/tech/oauth/endpoints)

## Prerequisites

Install Docker and Node.js.

## How To Run

In a terminal run the following to start FusionAuth.

```sh
docker-compose up
```

In another terminal start the app.

```sh
cd complete-application
docker run  -it --rm --name "app" -v ".:/app" -w "/app" -p 3000:3000 --network faNetwork node:23-alpine3.19 sh -c  "npm install && npm run start"
```

Browse to the app at http://localhost:3000.

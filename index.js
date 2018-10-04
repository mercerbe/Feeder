//express -- common js module
const express = require("express");
//import express -- es6 modules -- not on node yet
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
//keys object
const keys = require("./config/keys");

//define express app
const app = express();

//define passport --
//console.developers.google.com
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

//routes

// config for heroku
// if in production -- use env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`>App running on port ${PORT}`));

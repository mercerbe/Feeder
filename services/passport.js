//============================dependencies=======================//
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
//keys object
const keys = require("../config/keys");
//============================dependencies=======================//

//============================passport/googleAuth==================//

//define passport --
//console.developers.google.com
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecrect,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //access token allows us to access and update user information, read emails, ect...
      console.log("acccess token", accessToken);
      //auto update access token and reach user's account
      console.log("refresh token", refreshToken);
      //identifing info
      console.log("profile", profile);
    }
  )
);
//============================passport/googleAuth==================//

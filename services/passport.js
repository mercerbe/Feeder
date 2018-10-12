//============================dependencies=======================//
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
//keys object
const keys = require("../config/keys");
//mongoose
const mongoose = require("mongoose");
//============================dependencies=======================//

//users -- 1 arg is a fetch, 2 args is a define
const User = mongoose.model("users");

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
      //auto update access token and reach user's account
      //identifing info
      //check if user exists befor creating a new user
      //for es 2017 promises are not common,
      User.findOne({ googleId: profile.Id })
        //this is a promise...
        .then(existingUser => {
          //if we already have the record with the given Id
          if (existingUser) {
          } else {
            //create a new user!
          }
        });
      //define a new user class
      new User({ googleId: profile.id }).save();
    }
  )
);
//============================passport/googleAuth==================//

//============================dependencies=======================//
//express
//import options es6 modules -- not on node yet
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
//keys object
const keys = require("./config/keys");
//============================dependencies========================//

//============================passport/googleAuth==================//
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
//============================passport/googleAuth==================//

//============================routes==============================//

//+++google auth route -- authenticate user via google++//
//'google' string = GoogleStrategy
//https://accounts.google.com/o/oauth2/v2/auth?
//==response type==//
//response_type=code&
//== uri ===//
//redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&
//==id==//
//client_id=310619452062-t963a6e6ua7kjmvoojbrd99tq4s087uf.apps.googleusercontent.com
app.get(
  "/auth/google",
  passport.authenticate("google", {
    //scope = permissions in Oauth process
    scope: ["profile", "email"]
  })
);
//++google auth route -- authenticate user via google+++//

// +++ resolve profile  +++//
app.get("/auth/google/callback", passport.authenticate("google"));
//+++ resolve profile +++//

//============================routes============================//

//============================server=============================//
// config for heroku
// if in production -- use env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`>App running on port ${PORT}`));
//============================server==============================//

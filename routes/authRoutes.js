//============================dependencies=======================//
const passport = require("passport");
//============================dependencies=======================//

//export as a function using app as the arg
module.exports = app => {
  //============================routes==============================//
  //NOTES
  //+++google auth route -- authenticate user via google++//
  //'google' string = GoogleStrategy
  //https://accounts.google.com/o/oauth2/v2/auth?
  //==response type==//
  //response_type=code&
  //== uri ===//
  //redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&
  //==id==//
  //client_id=310619452062-t963a6e6ua7kjmvoojbrd99tq4s087uf.apps.googleusercontent.com
  //NOTES
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
};

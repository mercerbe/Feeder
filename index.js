//express -- common js module
const express = require("express");
//import express -- es6 modules -- not on node yet
const passport = require("passport");
const GoogleStrategy = require("passport-google-oath20").Strategy;

//define express app
const app = express();

//define passport --
//console.developers.google.com
passport.use(new GoogleStrategy());

//routes

// config for heroku
// if in production -- use env
const PORT = process.env.PORT || 4000;
app.listen(PORT);

//============================dependencies=======================//
//express
//import options es6 modules -- not on node yet
const express = require("express");
//models -- bring in model before passport needs it!
require("./models/User");
//passport -- just requiring file, no exports coming from here that need to be assigned
require("./services/passport");
//mongoose
//mongoose is interacting with mongoDB driver -- any depreciation warnings are a result of updates needed from mongoose
const mongoose = require("mongoose");
//keys for mongo connection
const keys = require("./config/keys");
//============================dependencies========================//

//connect to mongoDB
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

//define express app
const app = express();

//call auth routes passing in express -- second set of () calls function we just required
require("./routes/authRoutes")(app);

//============================server=============================//
// config for heroku
// if in production -- use env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`>App running on port ${PORT}`));
//============================server==============================//

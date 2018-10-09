//============================dependencies=======================//
//express
//import options es6 modules -- not on node yet
const express = require("express");
//passport -- just requiring file, no exports coming from here that need to be assigned
require("./services/passport");
//============================dependencies========================//

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

//============================dependencies=======================//
//mongoose library
const mongoose = require("mongoose");
//pull Schema property from mongoose through destructuring
const { Schema } = mongoose;
//============================dependencies=======================//

//============================Schema=======================//
//set schema and define properties
const userSchema = new Schema({
  googleId: {
    type: String
  }
});
//============================Schema=======================//

//============================Export=======================//
//define collection and schema attatched to collection
mongoose.model("users", userSchema);

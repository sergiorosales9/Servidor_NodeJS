const mongoose = require("mongoose");

const UserShema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  fisrtname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    trim: true,
  },

});

const User = mongoose.model("User", UserShema);
module.exports=User
const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("USER", userSchema);

module.exports = User;

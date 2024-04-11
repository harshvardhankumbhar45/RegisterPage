const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const RegisterSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  mobile: {
    type: Number,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    trim: true,
    required: true
  }
})

RegisterSchema.pre('save', async function(next) {
    console.log("Hi")
    if(this.isModified('password')){
        
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    }
    next();
})

const register = mongoose.model("Register", RegisterSchema);
module.exports = register;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: String,
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: Date,
  phone: String,
  address: String,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

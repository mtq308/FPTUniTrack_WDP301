const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: [{
    token: {
      type: String,
      required: true,
    },
  }],
}, { collection: 'User' });

const User = mongoose.model('User', userSchema);

module.exports = User;

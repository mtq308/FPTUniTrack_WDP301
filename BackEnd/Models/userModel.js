const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'lecturer', 'admin'],
  },
  password: {
    type: String,
    required: true,
  },
}, { collection: 'User' });

const User = mongoose.model('User', userSchema);

module.exports = User;

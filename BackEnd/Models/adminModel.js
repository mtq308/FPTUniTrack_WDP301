const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  isActive:{
    type: Boolean,
  }
}, { collection: 'User' });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

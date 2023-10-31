const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  adminUsername: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: 'admin',
  },
  fullname: {
    type: String,
    required: true,
  },
}, { collection: 'Admin' });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

const mongoose = require('mongoose');
const userRoleSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  roleId: {
    type: String,
    required: true,
  },
});

const UserRole = mongoose.model('UserRole', userRoleSchema);

module.exports = UserRole;

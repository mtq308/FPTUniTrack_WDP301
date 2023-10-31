const mongoose = require('mongoose');

// Define the Lecturer schema
const lecturerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  lectureUsername: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: Boolean,
    required: true,
  },
  idCard: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
}, { collection: 'Lecturer' });

// Create the Lecturer model
const Lecturer = mongoose.model('Lecturer', lecturerSchema);

module.exports = Lecturer;

const mongoose = require('mongoose');

// Define the Lecturer schema
const lecturerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  LectureUsername: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  Gender: {
    type: Boolean,
    required: true,
  },
  IdCard: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Fullname: {
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

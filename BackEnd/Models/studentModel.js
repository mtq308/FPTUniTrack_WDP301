const mongoose = require('mongoose');

// Define the Student schema
const studentSchema = new mongoose.Schema({
  id: {
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
  studentUsername: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
}, { collection: 'Student' });

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

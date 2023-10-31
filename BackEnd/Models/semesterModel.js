const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
  semesterID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
}, { collection: 'Semester' });

const Semester = mongoose.model('Semester', semesterSchema);

module.exports = Semester;

const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  classID: {
    type: String,
    required: true,
  },
  subjectID: {
    type: Number,
    required: true,
  },
  studentID: {
    type: [String],
    required: true,
  },
  roomCode: {
    type: String,
    required: true,
  },
  semesterID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
}, { collection: 'Class' });

const Class = mongoose.model('Class', classSchema);

module.exports = Class;

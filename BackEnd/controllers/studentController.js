const Student = require('../Models/studentModel.js');
const Class = require("../Models/classModel.js")
async function studentProfile(req, res) {

  const studentId = req.user.id;
  try {
    const student = await Student.findOne({ id: studentId});

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getStudentClasses(req, res) {
  const studentId = req.user.id;
  try {
    const classes = await Class.find({ StudentID: { $in: [studentId] } });
    res.json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getStudentTimeTable(req, res){
  const studentId = req.user.id;
}
module.exports = {
  studentProfile,
  getStudentClasses
};

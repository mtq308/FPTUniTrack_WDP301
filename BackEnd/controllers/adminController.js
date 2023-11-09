const Admin = require('../Models/adminModel');
const Lecturer = require('../Models/lecturerModel');
const Student = require('../Models/studentModel')
const roles = require('../configs/roleConfig')
async function adminProfile(req, res) {
  const adminId = req.Admin.id;

  try {
    const admin = await Admin.findOne({ id: adminId, role: 'Admin' });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.json(admin);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function updateStudentProfile(req, res) {
  const studentId = req.body.id;
  const { fullname, address, phone, email } = req.body;
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can update student profiles.' });
    }

    const student = await Student.findOne({ id: studentId });

    Object.assign(student, req.body);
    // Save the updated student data
    await student.save();

    res.json({ message: 'Student profile updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAllStudents(req, res) {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can get all student profiles.' });
    }
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAllLecturers(req, res) {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can get all lecturers profiles.' });
    }
    const lecturers = await Lecturer.find({});
    res.json(lecturers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function addStudent(req, res) {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can add students.' });
    }

    const newStudentData = req.body;

    const newStudent = new Student(newStudentData);

    await newStudent.save();

    res.json({ message: 'Student added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function viewStudentProfile(req, res) {
  const studentId = req.params.id; // Assuming the student ID is passed as a route parameter

  try {
    // Check if the request is coming from an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied. Only admins can view student profiles.' });
    }

    // Find the student with the specified ID
    const student = await Student.find({ id: studentId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (error) {

    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  adminProfile,
  getAllStudents,
  updateStudentProfile,
  addStudent,
  getAllLecturers,
  viewStudentProfile
};

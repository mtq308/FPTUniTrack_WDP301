const Admin = require('../Models/adminModel');
const Lecturer = require('../Models/lecturerModel');
const Student = require('../Models/studentModel');
const roles = require('../configs/roleConfig');

async function adminProfile(req, res) {
  const adminId = req.Admin.id;

  try {
    const admin = await Admin.findOne({ id: adminId, role: roles.ADMIN });

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
  const studentId = req.params.id;
  const { DateOfBirth, Gender, IDCard, Address, Phone, Email,
    StudentUsername, Specialization, IsActive, Fullname } = req.body;
    console.log('User Role:', req.user.role);
  try {
    if (req.body.role !== roles.ADMIN) {
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
    if (req.body.role !== roles.ADMIN) {
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
    if (req.body.role !== roles.ADMIN) {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can get all student profiles.' });
    }
    const lecturers = await Lecturer.find({});
    res.json(lecturers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function addStudent(req, res) {
  //Check user role
  try {
    if (req.body.role !== roles.ADMIN) {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can get all student profiles.' });
    }
    //Handle case duplicate ID.
    const {id} = req.body;
    console.log(id);
    const existingStudent = await Student.findOne({ id });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student with the same ID already exists' });
    }
    //If ID not dupilcate, continue create new student.
    const newStudentData = req.body;
    const newStudent = new Student(newStudentData);
    await newStudent.save();
    res.json({ message: 'Student added successfully' });

  } catch (err) {

    //Error handler case.
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function viewStudentProfile(req, res) {

  try {
    // Check if the request is coming from an admin
    if (req.body.role !== roles.ADMIN) {
      return res.status(403).json({ message: 'Permission denied. Only admins can view student profiles.' });
    }

    // Find the student with the specified ID
    const studentId = req.params.id; // Use req.params.id to get the ID from the route parameter
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

async function deleteStudent(req, res) {
  try {
    if (req.body.role !== roles.ADMIN) {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can delete student profiles.' });
    }

    const studentId = req.params.id;

    // Check if the student with the given id exists
    const student = await Student.findOne({ id: studentId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // If the student exists, delete it
    await student.remove();

    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  adminProfile,
  getAllStudents,
  updateStudentProfile,
  addStudent,
  getAllLecturers,
  viewStudentProfile,
  deleteStudent
};

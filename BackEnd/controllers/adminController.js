const Admin = require('../Models/adminModel');
const Student = require('../Models/studentModel')

async function adminProfile(req, res) {
  const adminId = req.Admin.id;

  try {
    const admin = await Admin.findOne({ id: adminId, role: 'admin' });

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
  const studentId = req.user.id;
  const { fullname, address, phone, email } = req.body; 
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can update student profiles.' });
    }

    const student = await Student.findOne({ id: studentId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    if (fullname) {
      student.fullname = fullname;
    }
    if (address) {
      student.address = address;
    }
    if (phone) {
      student.phone = phone;
    }
    if (email) {
      student.email = email;
    }

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
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can update student profiles.' });
    }
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  adminProfile,
  getAllStudents,
  updateStudentProfile
};

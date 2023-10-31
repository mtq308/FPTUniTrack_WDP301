const Admin = require('../Models/adminModel');

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
  const studentId = req.Admin.id; // Get the student's ID from the JWT token
  const { fullname, address, phone, email } = req.body; // Assuming these are the fields to update

  try {
    // Check if the requester is an admin
    if (req.Admin.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied. Only admin Admins can update student profiles.' });
    }

    // Find the student by ID
    const student = await Student.findOne({ id: studentId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Update the student's profile data
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

async function getAllStudents(res) {
  try {
    const students = await Student.find({}); // Assuming Student is your model
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

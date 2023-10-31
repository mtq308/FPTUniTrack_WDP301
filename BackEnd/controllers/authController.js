const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/userModel');
const Lecturer = require('../Models/lecturerModel')
const Student = require('../Models/studentModel')
const Admin = require('../Models/adminModel')

// Function to generate JWT token
function generateToken(user) {
  const payload = {
    id: user.id,
    role: user.role,
    time: Date.now()
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRED });
}

//Logout current session
async function logout(req, res) {
  try {
    const { id } = req.body;
    const tokenToLogout = req.header('Authorization'); 

    const user = await User.findOne({ id });

    user.accessToken = user.accessToken.filter((tokenInfo) => tokenInfo.token !== tokenToLogout);

    await user.save();

    res.json("Logout Success");
  } catch (error) {
    res.status(500).send(error);
  }
}

//Logout all device
async function logoutAll(req, res) {
  try {
    const { id } = req.body;

    const user = await User.findOne({ id });

    user.accessToken = [];

    await user.save();

    res.json("All Tokens Logged Out Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
}

//Student Login
async function studentLogin(req, res) {
  const { id, password } = req.body;
  try {
    const user = await User.findOne({ id, role: 'student' });
    if (!user) {
      return res.status(401).json({ message: 'Not found student' });
    }
    if (await bcrypt.compareSync(password, user.password)) {
      // Passwords match, user is authenticated
      const token = generateToken(user);
      user.accessToken = user.accessToken.concat({ token })
      user.save()
      const student = await Student.findOne({ id: id })
      return res.json({ student, token });
    } else {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// Lecturer login
async function lecturerLogin(req, res) {
  const { id, password } = req.body;

  try {
    // Find the user by ID and role
    const user = await User.findOne({ id, role: 'lecturer' });

    if (!user) {
      return res.status(401).json({ message: 'Not found lecturer' });
    }

    // Verify the password
    if (await bcrypt.compareSync(password, user.password)) {
      // Passwords match, user is authenticated
      const token = generateToken(user);
      user.accessToken = user.accessToken.concat({ token })
      user.save()
      const lecturer = await Lecturer.findOne({ id: id })
      return res.json({ lecturer, token });
    } else {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// Admin login
async function adminLogin(req, res) {
  const { id, password } = req.body;

  try {
    // Find the user by ID and role
    const user = await User.findOne({ id, role: 'admin' });
    if (!user) {
      return res.status(401).json({ message: 'Not found admin' });
    }
    // Verify the password
    if (await bcrypt.compareSync(password, user.password)) {
      // Passwords match, user is authenticated
      const token = generateToken(user);
      user.accessToken = user.accessToken.concat({ token })
      user.save()
      const admin = await Admin.findOne({ id: id })
      return res.json({ admin, token });
    } else {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  studentLogin,
  lecturerLogin,
  adminLogin,
  logout,
  logoutAll
};

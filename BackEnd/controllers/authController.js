const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/userModel');

// Function to generate JWT token
function generateToken(user) {
  const payload = {
    id: user.id,
    role: user.role,
    time: Date.now()
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRED });
}

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
      return res.json({ token });
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
        return res.json({ token });
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
        return res.json({ token });
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
};

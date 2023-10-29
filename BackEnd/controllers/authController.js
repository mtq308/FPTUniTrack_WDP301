const User = require('../Models/userModel.ts');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRole = require('../Models/userRoleModel.ts');
const Role = require('../Models/roleModel.ts');

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ msg: 'Incorrect Username or Password', status: false });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ msg: 'Incorrect Username or Password', status: false });
    }

    const userRole = await UserRole.findOne({ username });

    if (!userRole) {
      return res.status(400).json({ msg: 'Invalid user role', status: false });
    }

    const role = await Role.findOne({ roleId: userRole.role });

    if (!role) {
      return res.status(400).json({ msg: 'Invalid role', status: false });
    }

    const token = jwt.sign({ username: user.username, role: role.roleName }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRED,
    });

    res.json({ status: true, user: { username: user.username, role: role.roleName }, token });
  } catch (ex) {
    next(ex);
  }
}

async function register(req, res, next) {
  try {
    const { username, password } = req.body;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Permission denied', status: false });
    }

    const usernameCheck = await User.findOne({ username });

    if (usernameCheck) {
      return res.status(400).json({ msg: 'Username already used', status: false });
    }

    const userRole = await UserRole.findOne({ username });

    if (!userRole) {
      return res.status(400).json({ msg: 'Invalid user role', status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
      role: userRole.role,
    });

    const token = jwt.sign({ username: user.username, role: user.role }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRED,
    });

    res.json({ status: true, user: { username: user.username, role: user.role }, token });
  } catch (ex) {
    next(ex);
  }
}

module.exports = {
  login,
  register,
};

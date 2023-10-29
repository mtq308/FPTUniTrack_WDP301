const {
  login,
  register,
  setAvatar,
  logOut,
} = require("../controllers/authController");

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post("/login", authMiddleware.isAuthenticated, login);
router.post("/register", register);

module.exports = router;

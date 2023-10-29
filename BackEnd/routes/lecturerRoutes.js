const express = require("express");
const router = express.Router();
const authorizationMiddleware = require("../middlewares/authorizationMiddleware.js");

router.get("/teaching", authorizationMiddleware.isLecturer, (req, res) => {
  // Lecturer-specific teaching route
});

// Add more lecturer-specific routes

module.exports = router;

const express = require("express");
const router = express.Router();
const authorizationMiddleware = require("../middlewares/authorizationMiddleware.js");

router.get("/courses", authorizationMiddleware.isStudent, (req, res) => {
  // Student-specific courses route
});

// Add more student-specific routes

module.exports = router;

const express = require('express');
const adminController = require('../controllers/adminController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected route for admin's profile
router.get('/profile/:id', verifyToken, adminController.adminProfile);
// Route to get all students' information
router.get('/students', verifyToken, adminController.getAllStudents);
// Router.put('/students/:studentId/profile', adminController.updateStudentProfile);
router.put('/students/:id/profile', verifyToken, adminController.updateStudentProfile);

module.exports = router;

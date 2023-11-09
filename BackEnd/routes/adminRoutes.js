const express = require('express');
const adminController = require('../controllers/adminController');
const verifyToken = require('../middlewares/authMiddleware');
const verifyAdmin = require('../middlewares/authMiddleware');
const router = express.Router();

// Protected route for admin's profile
router.get('/profile/:id', verifyToken, adminController.adminProfile);
// Route to get all students' information
router.get('/getAllStudents', verifyToken, adminController.getAllStudents);

router.get('/student/profile/:id', verifyToken, adminController.viewStudentProfile);
// Router.put('/students/:studentId/profile', adminController.updateStudentProfile);
router.put('/updateStudent/:id/profile', verifyToken, adminController.updateStudentProfile);
//Router.post
router.post('/addStudent', verifyToken, adminController.addStudent);
//Router.post
router.get('/getAllLecturers', verifyToken, adminController.getAllLecturers)
module.exports = router;

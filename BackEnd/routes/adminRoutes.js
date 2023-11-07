const express = require('express');
const adminController = require('../controllers/adminController');
const verifyToken = require('../middlewares/authMiddleware');
const verifyAdmin = require('../middlewares/authMiddleware');
const router = express.Router();

// Protected route for admin's profile
router.get('/profile/:id', verifyAdmin, adminController.adminProfile);
// Route to get all students' information
router.get('/students', verifyToken, adminController.getAllStudents);
//Route to create new student's information
router.post('/students/create', verifyToken, adminController.createStudent);
router.get('/getAllStudents', verifyAdmin, adminController.getAllStudents);
// Router.put('/students/:studentId/profile', adminController.updateStudentProfile);
router.put('/updateStudent/:id/profile', verifyAdmin, adminController.updateStudentProfile);
//Router.post
router.post('/addStudent', verifyAdmin, adminController.addStudent);
//Router.post
router.get('/getAllLecturers', verifyAdmin, adminController.getAllLecturers)
module.exports = router;

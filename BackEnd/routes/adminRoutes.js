const express = require('express');
const adminController = require('../controllers/adminController');
const verifyToken = require('../middlewares/authMiddleware');
const verifyAdmin = require('../middlewares/authMiddleware');
const router = express.Router();

// Protected route for admin's profile
router.get('/profile/:id', verifyToken, adminController.adminProfile);
// Route to get all students' information
router.post('/getAllStudents', verifyToken, adminController.getAllStudents);

router.post('/student/profile/:id', verifyToken, adminController.viewStudentProfile);

router.put('/updateStudent/:id/profile', verifyToken, adminController.updateStudentProfile);

router.delete('/deleteStudent/:id', verifyToken, adminController.deleteStudent);
//Router.post
router.post('/addStudent', verifyToken, adminController.addStudent);
//Router.post
router.get('/getAllLecturers', verifyToken, adminController.getAllLecturers);
module.exports = router;

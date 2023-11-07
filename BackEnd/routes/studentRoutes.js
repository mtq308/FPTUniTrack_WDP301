const express = require('express');
const studentController = require('../controllers/studentController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected route for student's profile
router.get('/profile/:id', verifyToken, studentController.studentProfile);
<<<<<<< HEAD
router.get('/getStudentClasses/:id', studentController.getStudentClasses);
=======
router.get('/getStudentClasses/:id', verifyToken, studentController.getStudentClasses);
router.get('/getStudentSubjectId/:id', verifyToken, studentController.getStudentBySubjectID)
>>>>>>> origin/NhanTV
router.post('/getSlotsOfWeek', verifyToken, studentController.getSlotsByWeekNumber);
router.post('/getGrade', studentController.getGrade);
module.exports = router;

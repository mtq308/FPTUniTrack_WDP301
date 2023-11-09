const express = require('express');
const studentController = require('../controllers/studentController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected route for student's profile
router.get('/profile/:id', verifyToken, studentController.studentProfile);
router.get('/getStudentClasses/:id', verifyToken, studentController.getStudentClasses);
router.get('/getStudentSubjectId/:id', verifyToken, studentController.getStudentBySubjectID)
router.post('/getSlotsOfWeek', verifyToken, studentController.getSlotsByWeekNumber);
router.post('/getGrade', verifyToken, studentController.getGrade);
router.post('/getSubjectByStudentId', verifyToken, studentController.getSubjectIdByStudentId)
module.exports = router;

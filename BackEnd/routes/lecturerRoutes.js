const express = require('express');
const lecturerController = require('../controllers/lecturerController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected routes for lecturer's profile
router.get('/profile/:id', verifyToken, lecturerController.lecturerProfile);

// Protected route to get slots by week number
router.post('/getSlotsByWeek/', lecturerController.getSlotsByWeekNumber);

// Protected route to update student grade
router.put('/grade/update/:studentId/:subjectId/:scoreName', verifyToken, lecturerController.updateStudentGrade);

// Protected route to get grade by student ID
router.post('/getGradeByStudentId', verifyToken, lecturerController.getGradeByStudentId);

// Protected route to get grade by class
router.post('/getGradeByClass', lecturerController.getGradeByClass);

// Route to get all student in class by subject ID
router.post('/getStudentBySubjectId', verifyToken, lecturerController.getAllStudentInClassBySubjectId);

// Route to get all class IDs
router.get('/allClassIds', lecturerController.getAllClassId);

// Route to get all subjects by class ID
router.post('/allSubjectsByClassId', lecturerController.getAllSubjectByClassId);

// Route to get grades by class ID and subject ID
router.post('/gradeByClassIdAndSubjectId', lecturerController.getGradeByClassIdAndSubjectId);

module.exports = router;

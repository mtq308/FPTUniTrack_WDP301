const express = require('express');
const lecturerController = require('../controllers/lecturerController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected route for lecturer's profile
router.get('/profile/:id', verifyToken, lecturerController.lecturerProfile);

router.post('/getSlotsByWeek/', verifyToken, lecturerController.getSlotsByWeekNumber);

router.put('/grade/update/:studentId/:subjectId/:scoreName', lecturerController.updateStudentGrade);

router.post('/getGradeByStudentId', lecturerController.getGradeByStudentId)

router.post('/getGradeByClass', lecturerController.getGradeByClass)

router.post('/getStudentBySubjectId', lecturerController.getAllStudentInClassBySubjectId)
module.exports = router;

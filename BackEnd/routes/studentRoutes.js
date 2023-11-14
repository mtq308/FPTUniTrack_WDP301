const express = require('express');
const studentController = require('../controllers/studentController');
const subjectController = require('../controllers/subjectController');
const notificationController = require('../controllers/notificationController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected route for student's profile
router.get('/profile/:id', verifyToken, studentController.studentProfile);
router.get('/getStudentClasses/:id', verifyToken, studentController.getStudentClasses);
router.get('/getStudentSubjectId/:id', verifyToken, studentController.getStudentBySubjectID)
router.post('/getSlotsOfWeek', studentController.getSlotsByWeekNumber);
router.post('/getGrade', studentController.getGrade);
router.post('/getSubjectByStudentId', studentController.getSubjectIdByStudentId);

//Routes for subject - LECTURER with READ subject privillege only
//Get all subjects
router.get('/getAllSubjects', verifyToken, subjectController.getAllSubjects);
//Get subject detail
router.get('/subjectDetail/:id', verifyToken, subjectController.subjectDetail);
//Noti
router.get('/getAllNotifications', verifyToken, notificationController.getAllNotifications);
router.get('/notificationDetail/:id', verifyToken, notificationController.viewNotificationDetail);



module.exports = router;

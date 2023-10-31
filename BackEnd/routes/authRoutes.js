const express = require('express');
const authController = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login/student', authController.studentLogin);
router.post('/login/lecturer', authController.lecturerLogin);
router.post('/login/admin', authController.adminLogin);

//router.get('/student/profile', verifyToken, authController.studentProfile);

module.exports = router;

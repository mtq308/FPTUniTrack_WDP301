    const express = require('express');
    const studentController = require('../controllers/studentController');
    const verifyToken = require('../middlewares/authMiddleware');

    const router = express.Router();

    // Protected route for student's profile
    router.get('/profile/:id', verifyToken, studentController.studentProfile);
    router.get('/getStudentClasses/:id', verifyToken, studentController.getStudentClasses);

    module.exports = router;

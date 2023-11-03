const express = require('express');
const semesterController = require('../controllers/semesterController'); // Replace with the correct path to your semester controller
const verifyToken = require('../middlewares/authMiddleware'); // Replace with the appropriate middleware

const router = express.Router();

// Define your semester routes here


router.get('/', semesterController.getAllSemesters);
router.post('/', semesterController.createSemester);
router.get('/:semesterID', semesterController.getSemesterById);
router.put('/:id', verifyToken, semesterController.updateSemester);
router.delete('/:id', verifyToken, semesterController.deleteSemester);

module.exports = router;

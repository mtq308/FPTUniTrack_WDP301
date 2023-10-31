const express = require('express');
const lecturerController = require('../controllers/lecturerController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected route for lecturer's profile
router.get('/profile/:id', verifyToken, lecturerController.lecturerProfile);

module.exports = router;

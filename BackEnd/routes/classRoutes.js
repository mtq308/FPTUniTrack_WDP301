const express = require('express');
const classController = require('../controllers/classController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:semesterId', verifyToken, classController.getClassBySemester);

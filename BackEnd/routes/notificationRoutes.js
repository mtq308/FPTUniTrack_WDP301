const express = require('express');
const notificationController = require('../controllers/notificationController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to get all announcements
router.get('/', verifyToken, notificationController.getAllNotifications);
// Admin-only routes
router.post('/', verifyToken, notificationController.createNotification);
router.put('/:id', verifyToken, notificationController.updateNotification);
router.delete('/:id', verifyToken, notificationController.deleteNotification);

module.exports = router;

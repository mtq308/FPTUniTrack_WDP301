const Notification = require('../Models/notificationModel');

async function getAllNotifications(req, res, next) {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function createNotification(req, res, next) {
    try {
      // Check if the user has admin privileges (you need to implement this middleware)
      if (req.body.role !== 'admin') {
        return res.status(403).json({ error: 'Only admin can create announcements' });
      }
  
      const { title, content, dateTime } = req.body;
      const newNotification = new Notification({ title, content, dateTime });
      await newNotification.save();
  
      res.json(newNotification);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async function updateNotification(req, res, next) {
    try {
      // Check if the user has admin privileges
      if (req.body.role !== 'admin') {
        return res.status(403).json({ error: 'Only admin can create announcements' });
      }

      const notificationId = req.params.id;
      const { title, content, dateTime } = req.body;
      const updatedNotification = await Notification.findByIdAndUpdate(
        notificationId,
        { title, content, dateTime },
        { new: true }
      );
  
      res.json(updatedNotification);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async function deleteNotification(req, res, next) {
    try {
      // Check if the user has admin privileges
      if (req.body.role !== 'admin') {
        return res.status(403).json({ error: 'Only admin can create announcements' });
      }
      const notificationId = req.params.id;
      await Notification.findByIdAndDelete(notificationId);
  
      res.json({ message: 'Announcement deleted successfully' });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  module.exports = {
    getAllNotifications,
    createNotification,
    updateNotification,
    deleteNotification,
  };
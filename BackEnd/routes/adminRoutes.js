const express = require("express");
const router = express.Router();
const { isAdmin } = require('../middlewares/authorizationMiddleware.js');
const getUserRoles = require('../middlewares/getUserRoles.js'); 
const adminController = require('../controllers/adminController.js');

router.post('/updatePassword/:username', isAdmin, getUserRoles, adminController.updatePassword);

module.exports = router;

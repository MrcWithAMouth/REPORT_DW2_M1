const express = require('express');
const userController = require('../Controllers/UserController');
const router = express.Router();

router.get('/me', userController.getUser);

module.exports = router;
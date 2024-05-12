const express = require('express');
const userController = require('../Controllers/UserController');
const authenticateJWT = require('../middlewares/authenticateJWT');
const router = express.Router();

// router.get('/user', userController.list);
// router.post('/user', userController.create);
router.post('/user', authenticateJWT, userController.create);
router.put('/user/:id', authenticateJWT, userController.update);
router.delete('/user/:id', authenticateJWT, userController.delete);


module.exports = router;
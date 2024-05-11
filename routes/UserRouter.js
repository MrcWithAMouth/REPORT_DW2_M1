const express = require('express');
const userController = require('../Controllers/UserController');
const router = express.Router();

router.get('/user', userController.list);
router.post('/user', userController.create);
router.get('/user/:id', userController.getById);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);


module.exports = router;
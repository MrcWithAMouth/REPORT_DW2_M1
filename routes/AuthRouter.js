const authController = require('../Controllers/AuthController');

router.post('/login', authController.login);
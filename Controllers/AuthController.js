const authService = require('../services/AuthService');

const authController = {
    async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const token = await authService.authenticate(email, password);
            res.json({ token });
        } catch (error) {
            console.error('Error logging in:', error);
            next(error);
        }
    }
};

module.exports = authController;
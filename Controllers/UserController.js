const userService = require('../services/UserService');

const userController = {
    async list(req, res, next) {
        try {
            const users = await userService.listUsers();
            res.json(users);
        } catch (error) {
            console.error('Error fetching all users', error);
            next(error);
        }
    },

    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const user = await userService.getUserById(id);
            res.json(user);
        } catch (error) {
            console.error('Error fetching user by ID:', error);
            next(error);
        }
    },

    async create(req, res, next) {
        const { name, email, password,company_id } = req.body; 
        try {
            const newUserId = await userService.createUser(name, email, password,company_id); 
            res.json({ id: newUserId, message: 'User created successfully' });
        } catch (error) {
            console.error('Error creating user:', error);
            next(error);
        }
    },

    async update(req, res, next) {
        const { id } = req.params;
        const { name, email, password,company_id } = req.body; 
        try {
            await userService.updateUser(id, name, email, password,company_id); 
            res.json({ message: 'User updated successfully' });
        } catch (error) {
            console.error('Error updating user:', error);
            next(error);
        }
    },

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await userService.deleteUser(id);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            next(error);
        }
    }
};

module.exports = userController;

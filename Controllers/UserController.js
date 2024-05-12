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
        const { name, email, password, company_id } = req.body; 
    
        // Validate the email
        if (!validateEmail(email)) {
            return res.status(400).json({ message: 'Invalid email' });
        }
    
        try {
            const newUserId = await userService.createUser(name, email, password, company_id); 
            res.json({ id: newUserId, message: 'User created successfully' });
        } catch (error) {
            console.error('Error creating user:', error);
            next(error);
        }
    },

    async update(req, res, next) {
        const { id } = req.params;
        const { name, email, password, company_id } = req.body; 
        try {
            await userService.updateUser(id, name, email, password, company_id); 
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
    },

    async getUser(req, res, next) {
        try {
            const user = await userService.getUserById(req.user.id);
            res.json(user);
        } catch (error) {
            console.error('Error getting authenticated user:', error);
            next(error);
        }
    }
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = userController;

const User = require('../models/User');
const Phone = require('../models/Phone');

async function listUsers() {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error('Error listing users: ' + error.message);
    }
}

async function getUserById(id) {
    try {
        const user = await User.findByPk(id, {
            include: [
                {
                    model: Phone,
                    as: 'phones',
                    attributes: { exclude: ['user_id'] } 
                }
            ]
        });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error getting user by ID: ' + error.message);
    }
}


async function createUser(name, email, password, company_id) {
    try {
        const newUser = await User.create({ name, email, password, company_id });
        return newUser.id;
    } catch (error) {
        throw new Error('Error creating a new user: ' + error.message);
    }
}

async function updateUser(id, name, email, password, company_id) {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        await user.update({ name, email, password, company_id });
    } catch (error) {
        throw new Error('Error updating the user: ' + error.message);
    }
}

async function deleteUser(id) {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        await user.destroy();
    } catch (error) {
        throw new Error('Error deleting the user: ' + error.message);
    }
}

async function getUserPhones(userId) {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        
        const phones = await user.getPhones();
        return phones;
    } catch (error) {
        throw new Error('Error getting user phones: ' + error.message);
    }
}

async function getUserByEmailAndPassword(email, password) {
    try {
        const user = await User.findOne({ where: { email, password } });
        if (!user) {
            console.log('User not found in database');
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        console.log('Error getting user by email and password: ' + error.message);
        throw new Error('Error getting user by email and password: ' + error.message);
    }
}

module.exports = { listUsers, getUserById, createUser, updateUser, deleteUser, getUserPhones, getUserByEmailAndPassword };

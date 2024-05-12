const User = require('../models/User');
const Phone = require('../models/Phone');

async function listUsers() {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });                                                                                                                                                                                              
        return users;
    } catch (error) {
        throw new Error('Error listing users: ' + error.message);
    }
}

async function getUserById(id) {
    try {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] },
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
        return newUser.get('id');
    } catch (error) {
        if (error.message === 'Email already in use!') {
            throw new Error('Error creating a new user: Email already in use!');
        }
        throw new Error('Error creating a new user: ' + error.message);
    }
}

async function updateUser(id, name, email, password, company_id) {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        if (email !== user.email) {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                throw new Error('Email already in use!');
            }
        }
        await user.update({ name, email, password, company_id });
    } catch (error) {
        if (error.message === 'Email already in use!') {
            throw new Error('Error updating the user: Email already in use!');
        }
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

async function getUser(userId) {
    // Fetch the user with the specified ID from the database
    // This is just a placeholder. Replace it with your actual database query.
    const user = await database.query('SELECT * FROM users WHERE id = ?', [userId]);
  
    return user;
  }

module.exports = { listUsers, getUserById, createUser, updateUser, deleteUser, getUserPhones, getUserByEmailAndPassword, getUser };

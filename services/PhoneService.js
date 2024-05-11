const Phone = require('../models/Phone');
const User = require('../models/User');
const accessoriesService = require('./AccessoriesService'); 

async function listPhones() {
    try {
        const phones = await Phone.findAll();
        return phones;
    } catch (error) {
        throw new Error('Error listing phones: ' + error.message);
    }
}

async function getPhoneById(id) {
    try {
        const phone = await Phone.findByPk(id);
        if (!phone) {
            throw new Error('Phone not found');
        }
        return phone;
    } catch (error) {
        throw new Error('Error getting phone by ID: ' + error.message);
    }
}

async function createPhone(brand, model, emei, userId = null) {
    try {
        if (userId !== null) {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('User with provided user_id does not exist');
            }
        }

        const newPhone = await Phone.create({ brand, model, emei, user_id: userId });

        const phoneId = newPhone.phone_id;

        await accessoriesService.createAccessoriesForPhone(phoneId);

        return newPhone.phone_id;
    } catch (error) {
        throw new Error('Error creating a new phone: ' + error.message);
    }
}

async function updatePhone(id, brand, model, emei, userId = null) {
    try {
        const phone = await Phone.findByPk(id);
        if (!phone) {
            throw new Error('Phone not found');
        }

        if (userId !== null) {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('User with provided user_id does not exist');
            }
        }

        await phone.update({ brand, model, emei, user_id: userId });
    } catch (error) {
        throw new Error('Error updating the phone: ' + error.message);
    }
}

async function deletePhone(id) {
    try {
        const phone = await Phone.findByPk(id);
        if (!phone) {
            throw new Error('Phone not found');
        }
        await phone.destroy();
    } catch (error) {
        throw new Error('Error deleting the phone: ' + error.message);
    }
}

async function getByEmei(emei) {
    try {
        const phone = await Phone.findOne({ where: { emei } });
        if (!phone) {
            throw new Error('Phone not found');
        }
        return phone;
    } catch (error) {
        throw new Error('Error getting phone by EMEI: ' + error.message);
    }
}

module.exports = { listPhones, getPhoneById, createPhone, updatePhone, deletePhone, getByEmei };

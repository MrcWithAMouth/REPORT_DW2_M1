const Phone = require('../models/Phone');

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

async function createPhone(brand, model, emei) {
    try {
        const newPhone = await Phone.create({ brand, model, emei });
        return newPhone.id;
    } catch (error) {
        throw new Error('Error creating a new phone: ' + error.message);
    }
}

async function updatePhone(id, brand, model, emei) {
    try {
        const phone = await Phone.findByPk(id);
        if (!phone) {
            throw new Error('Phone not found');
        }
        await phone.update({ brand, model, emei });
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

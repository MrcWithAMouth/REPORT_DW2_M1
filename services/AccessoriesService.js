const Accessories = require('../models/Accessories');

async function listAccessories() {
    try {
        const accessories = await Accessories.findAll();
        return accessories;
    } catch (error) {
        throw new Error('Error listing accessories: ' + error.message);
    }
}

async function getAccessoriesByPhoneId(phoneId) {
    try {
        const accessories = await Accessories.findOne({ where: { phone_id: phoneId } });
        return accessories;
    } catch (error) {
        throw new Error('Error getting accessories by phone ID: ' + error.message);
    }
}

async function createAccessories(phoneId, screenProtector, caseProtector) {
    try {
        const newAccessories = await Accessories.create({ phone_id: phoneId, screen_protector: screenProtector, case_protector: caseProtector });
        return newAccessories;
    } catch (error) {
        throw new Error('Error creating accessories: ' + error.message);
    }
}

async function updateAccessories(phoneId, screenProtector, caseProtector) {
    try {

        if (!phoneId || screenProtector === undefined || caseProtector === undefined) {
            throw new Error('Invalid parameters');
        }

        let accessories = await Accessories.findOne({ where: { phone_id: phoneId } });
        if (!accessories) {
            throw new Error('No accessories found for phone with id: ' + phoneId);
        }

        
        accessories.screen_protector = screenProtector;
        accessories.case_protector = caseProtector;

        await accessories.save();

        return accessories;
    } catch (error) {
        throw new Error('Error updating accessories: ' + error.message);
    }
}




async function deleteAccessories(phoneId) {
    try {
        const accessories = await Accessories.findOne({ where: { phone_id: phoneId } });
        if (!accessories) {
            throw new Error('Accessories not found');
        }
        await accessories.destroy();
    } catch (error) {
        throw new Error('Error deleting accessories: ' + error.message);
    }
}

async function createAccessoriesForPhone(phoneId) {
    try {

        const existingAccessories = await Accessories.findOne({ where: { phone_id: phoneId } });
        if (existingAccessories) {
            return existingAccessories;
        }

        const screenProtector = false; 
        const caseProtector = false; 
        const newAccessories = await Accessories.create({ phone_id: phoneId, screen_protector: screenProtector, case_protector: caseProtector });
        return newAccessories;
    } catch (error) {
        throw new Error('Error creating accessories for phone: ' + error.message);
    }
}



module.exports = { listAccessories, getAccessoriesByPhoneId, createAccessories, updateAccessories, deleteAccessories, createAccessoriesForPhone };

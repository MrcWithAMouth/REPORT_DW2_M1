const phoneService = require('../services/PhoneService');
const accessoriesService = require('../services/AccessoriesService');

const phoneController = {
    async list(req, res, next) {
        try {
            const phones = await phoneService.listPhones(); 
            res.json(phones);
        } catch (error) {
            console.error('Error fetching all phones', error);
            next(error);
        }
    },

    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const phone = await phoneService.getPhoneById(id); 
            res.json(phone);
        } catch (error) {
            console.error('Error fetching phone by ID:', error);
            next(error);
        }
    },

    async create(req, res, next) {
        const { brand, model, emei, user_id } = req.body; 
        try {
            
            const newPhoneId = await phoneService.createPhone(brand, model, emei, user_id); 
            
            
            await accessoriesService.createAccessoriesForPhone(newPhoneId);

            res.json({ id: newPhoneId, message: 'Phone created successfully' });
        } catch (error) {
            console.error('Error creating phone:', error);
            next(error);
        }
    },

    async update(req, res, next) {
        const { id } = req.params;
        const { brand, model, emei, user_id } = req.body;
        try {
            await phoneService.updatePhone(id, brand, model, emei, user_id);
            res.json({ message: 'Phone updated successfully' });
        } catch (error) {
            console.error('Error updating phone:', error);
            next(error);
        }
    },

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await phoneService.deletePhone(id);
            res.json({ message: 'Phone deleted successfully' });
        } catch (error) {
            console.error('Error deleting phone:', error);
            next(error);
        }
    },

    async getByEmei(req, res, next) {
        const { emei } = req.params;
        try {
            const phone = await phoneService.getByEmei(emei);
            res.json(phone);
        } catch (error) {
            console.error('Error fetching phone by EMEI:', error);
            next(error);
        }
    }
};

module.exports = phoneController;

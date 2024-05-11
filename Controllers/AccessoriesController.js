const accessoriesService = require('../services/AccessoriesService');

const accessoriesController = {
    async list(req, res, next) {
        try {
            const accessories = await accessoriesService.listAccessories();
            res.json(accessories);
        } catch (error) {
            console.error('Error fetching all accessories', error);
            next(error);
        }
    },

    async getByPhoneId(req, res, next) {
        const { phoneId } = req.params;
        try {
            const accessories = await accessoriesService.getAccessoriesByPhoneId(phoneId);
            res.json(accessories);
        } catch (error) {
            console.error('Error fetching accessories by phone ID:', error);
            next(error);
        }
    },

    async create(req, res, next) {
        const { phoneId, screenProtector, caseProtector } = req.body;
        try {
            const newAccessories = await accessoriesService.createAccessories(phoneId, screenProtector, caseProtector);
            res.json({ message: 'Accessories created successfully', accessories: newAccessories });
        } catch (error) {
            console.error('Error creating accessories:', error);
            next(error);
        }
    },

    async update(req, res, next) {
        console.log('update function called');
        console.log('req.body:', req.body);
    
        const { phoneId } = req.params;
        const { screen_protector, case_protector } = req.body; 
        try {
            console.log(`phoneId: ${phoneId}, screenProtector: ${screen_protector}, caseProtector: ${case_protector}`); 
    
            const updatedAccessories = await accessoriesService.updateAccessories(phoneId, screen_protector, case_protector); 
            res.json({ message: 'Accessories updated successfully', accessories: updatedAccessories });
        } catch (error) {
            console.error('Error updating accessories:', error);
            next(error);
        }
    },

    async delete(req, res, next) {
        const { phoneId } = req.params;
        try {
            await accessoriesService.deleteAccessories(phoneId);
            res.json({ message: 'Accessories deleted successfully' });
        } catch (error) {
            console.error('Error deleting accessories:', error);
            next(error);
        }
    },

    async createAccessoriesForPhone(phoneId) {
        try {
            
            const newAccessories = await db.createAccessoriesForPhone(phoneId);
            return newAccessories;
        } catch (error) {
            throw new Error('Error creating accessories for phone: ' + error.message);
        }
    }
};


module.exports = accessoriesController;

const companyService = require('../services/CompanyService');

const companyController = {
    async list(req, res, next) {
        try {
            const companies = await companyService.listCompanies();
            res.json(companies);
        } catch (error) {
            console.error('Error fetching all companies', error);
            next(error);
        }
    },

    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const company = await companyService.getCompanyById(id, {
                attributes: {exclude: ['password']}
            });
            res.json(company);
        } catch (error) {
            console.error('Error fetching company by ID:', error);
            next(error);
        }
    },

    async create(req, res, next) {
        const { name } = req.body;
        try {
            const newCompanyId = await companyService.createCompany(name);
            res.json({ id: newCompanyId, message: 'Company created successfully' });
        } catch (error) {
            console.error('Error creating company:', error);
            next(error);
        }
    },

    async update(req, res, next) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            await companyService.updateCompany(id, name);
            res.json({ message: 'Company updated successfully' });
        } catch (error) {
            console.error('Error updating company:', error);
            next(error);
        }
    },

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await companyService.deleteCompany(id);
            res.json({ message: 'Company deleted successfully' });
        } catch (error) {
            console.error('Error deleting company:', error);
            next(error);
        }
    }
};

module.exports = companyController;
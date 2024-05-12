const Company = require('../models/Company');
const User = require('../models/User');

async function listCompanies() {
    try {
        const companies = await Company.findAll();
        return companies;
    } catch (error) {
        throw new Error('Error listing companies: ' + error.message);
    }
}

async function getCompanyById(id) {
    try {
        const company = await Company.findByPk(id, { 
            include: [
                {
                    model: User,
                    as: 'users', 
                    where: { company_id: id },
                    attributes: { exclude: ['company_id', 'password'] } 
                }
            ]
        });

        if (!company) {
            throw new Error('Company not found');
        }
        return company;
    } catch (error) {
        throw new Error('Error getting company by ID: ' + error.message);
    }
}

async function createCompany(name) {
    try {
        const newCompany = await Company.create({ name });
        return newCompany.company_id;
    } catch (error) {
        throw new Error('Error creating a new company: ' + error.message);
    }
}

async function updateCompany(id, name) {
    try {
        const company = await Company.findByPk(id);
        if (!company) {
            throw new Error('Company not found');
        }
        await company.update({ name });
    } catch (error) {
        throw new Error('Error updating the company: ' + error.message);
    }
}

async function deleteCompany(id) {
    try {
        const company = await Company.findByPk(id);
        if (!company) {
            throw new Error('Company not found');
        }
        await company.destroy();
    } catch (error) {
        throw new Error('Error deleting the company: ' + error.message);
    }
}

module.exports = {
    listCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany
};

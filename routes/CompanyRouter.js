const express = require('express');
const companyController = require('../Controllers/CompanyController');
const router = express.Router();

router.get('/companies', companyController.list);
router.post('/company', companyController.create);
router.get('/company/:id', companyController.getById);
router.put('/company/:id', companyController.update);
router.delete('/company/:id', companyController.delete);

module.exports = router;
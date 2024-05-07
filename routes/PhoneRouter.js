const express = require('express');
const PhoneController = require('../Controllers/PhoneController'); //comment
const router = express.Router();

router.get('/phones', PhoneController.list);
router.post('/phones', PhoneController.create);
router.get('/phones/:id', PhoneController.getById);
router.put('/phones/:id', PhoneController.update);
router.delete('/phones/:id', PhoneController.delete);
router.get('/phones/emei/:emei', PhoneController.getByEmei);

module.exports = router;

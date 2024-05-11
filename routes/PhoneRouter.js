const express = require('express');
const PhoneController = require('../Controllers/PhoneController'); 
const router = express.Router();

router.get('/phone', PhoneController.list);
router.post('/phone', PhoneController.create);
router.get('/phone/:id', PhoneController.getById);
router.put('/phone/:id', PhoneController.update);
router.delete('/phone/:id', PhoneController.delete);
router.get('/phone/emei/:emei', PhoneController.getByEmei);

module.exports = router;

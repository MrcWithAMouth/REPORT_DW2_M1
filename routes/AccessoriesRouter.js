const express = require('express');
const accessoriesController = require('../Controllers/AccessoriesController');
const router = express.Router();

router.get('/accessories', accessoriesController.list);
router.get('/accessories/:phoneId', accessoriesController.getByPhoneId);
router.post('/accessories', accessoriesController.create);
router.put('/accessories/:phoneId', accessoriesController.update);
router.delete('/accessories/:phoneId', accessoriesController.delete);

module.exports = router;

const express = require('express');
const router = express.Router(); 
const servicesController = require('../controllers/services.controller');

router
    .get('/', servicesController.get )
    .get('/:id', servicesController.getById )
    .post('/', servicesController.create )
    .put('/:id', servicesController.update )
    .delete('/:id', servicesController._delete );

module.exports = router;

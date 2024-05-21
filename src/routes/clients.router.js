const express = require('express');
const router = express.Router(); 
const clientsController = require('../controllers/clients.controller');

router
    .get('/', clientsController.get )
    .get('/:id', clientsController.getById )
    .post('/', clientsController.create )
    .put('/:id', clientsController.update )
    .delete('/:id', clientsController._delete );

module.exports = router;

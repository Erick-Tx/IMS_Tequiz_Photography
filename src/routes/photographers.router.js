const express = require('express');
const router = express.Router(); 
const photographersController = require('../controllers/photographers.controller');

router
    .get('/', photographersController.get )
    .get('/:id', photographersController.getById )
    .post('/', photographersController.create )
    .put('/:id', photographersController.update )
    .delete('/:id', photographersController._delete );

module.exports = router;

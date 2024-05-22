const express = require('express');
const router = express.Router(); 
const rentalsController = require('../controllers/rentals.controller');

router
    .get('/', rentalsController.get )
    .get('/:id', rentalsController.getById )
    .post('/', rentalsController.create )
    .put('/:id', rentalsController.update )
    .delete('/:id', rentalsController._delete );

module.exports = router;

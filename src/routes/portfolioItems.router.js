const express = require('express');
const router = express.Router(); 
const portfolioItemsController = require('../controllers/portfolioItems.controller');

router
    .get('/', portfolioItemsController.get )
    .get('/:id', portfolioItemsController.getById )
    .post('/', portfolioItemsController.create )
    .put('/:id', portfolioItemsController.update )
    .delete('/:id', portfolioItemsController._delete );

module.exports = router;

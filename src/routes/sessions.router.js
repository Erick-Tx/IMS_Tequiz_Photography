const express = require('express');
const router = express.Router(); 
const sessionsController = require('../controllers/sessions.controller');

router
    .get('/', sessionsController.get )
    .get('/:id', sessionsController.getById )
    .post('/', sessionsController.create )
    .put('/:id', sessionsController.update )
    .delete('/:id', sessionsController._delete );

module.exports = router;

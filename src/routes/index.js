const express = require('express'); 

const photographersRouter = require('./photographers.router');
const clientsRouter = require('./clients.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/photographers', photographersRouter);
  router.use('/clients', clientsRouter);
}

module.exports = routerApi;

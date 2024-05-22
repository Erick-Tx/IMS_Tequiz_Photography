const express = require('express'); 

const photographersRouter = require('./photographers.router');
const clientsRouter = require('./clients.router');
const equipmentsRouter = require('./equipments.router');
const servicesRouter = require('./services.router');
const productsRouter = require('./products.router');
const rentalsRouter = require('./rentals.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/photographers', photographersRouter);
  router.use('/clients', clientsRouter);
  router.use('/equipments', equipmentsRouter);
  router.use('/services', servicesRouter);
  router.use('/products', productsRouter);
  router.use('/rentals', rentalsRouter);
}

module.exports = routerApi;

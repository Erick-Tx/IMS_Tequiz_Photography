const { Photographer, PhotographerSchema } = require('./photographers.model');
const { Client, ClientSchema } = require('./clients.model');
const { Equipment, EquipmentSchema } = require('./equipments.model');
const { Service, ServiceSchema } = require('./services.model');
const { Product, ProductSchema } = require('./products.model');
const { Rental, RentalSchema } = require('./rentals.model');
const { Session, SessionSchema } = require('./sessions.model');
const { PortfolioItem, PortfolioItemSchema } = require('./portfolioItem.model');

function setupModels(sequelize) {
    Photographer.init(PhotographerSchema, Photographer.config(sequelize));
    Client.init(ClientSchema, Client.config(sequelize));
    Equipment.init(EquipmentSchema, Equipment.config(sequelize));
    Service.init(ServiceSchema, Service.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Rental.init(RentalSchema, Rental.config(sequelize));
    Session.init(SessionSchema, Session.config(sequelize));
    PortfolioItem.init(PortfolioItemSchema , PortfolioItem.config(sequelize));
    

    // Asociaciones
  Client.associate(sequelize.models);
  Session.associate(sequelize.models);
  Equipment.associate(sequelize.models);
  Photographer.associate(sequelize.models);
  Service.associate(sequelize.models);
  Product.associate(sequelize.models);
  Rental.associate(sequelize.models);
  PortfolioItem.associate(sequelize.models);
}

module.exports = setupModels;

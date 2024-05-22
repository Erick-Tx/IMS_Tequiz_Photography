const { Photographer, PhotographerSchema } = require('./photographers.model');
const { Client, ClientSchema } = require('./clients.model');
const { Equipment, EquipmentSchema } = require('./equipments.model');
const { Service, ServiceSchema } = require('./services.model');
const { Product, ProductSchema } = require('./products.model');
const { Rental, RentalSchema } = require('./rentals.model');

function setupModels(sequelize) {
    Photographer.init(PhotographerSchema, Photographer.config(sequelize));
    Client.init(ClientSchema, Client.config(sequelize));
    Equipment.init(EquipmentSchema, Equipment.config(sequelize));
    Service.init(ServiceSchema, Service.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Rental.init(RentalSchema, Rental.config(sequelize));
}

module.exports = setupModels;

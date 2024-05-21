const { Photographer, PhotographerSchema } = require('./photographers.model');
const { Client, ClientSchema } = require('./clients.model');

function setupModels(sequelize) {
    Photographer.init(PhotographerSchema, Photographer.config(sequelize));
    Photographer.init(ClientSchema, Client.config(sequelize));
}

module.exports = setupModels;

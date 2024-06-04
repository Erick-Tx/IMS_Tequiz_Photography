const { models } = require('../libs/sequelize');

class ClientsService { 
  
    constructor() {}

    async find() {
      const res = await models.Client.findAll({include:[{model: models.Session}, {model: models.Rental}]});
      return res;
    }

    async findOne(id) {
      const res = await models.Client.findByPk(id, {include:[{model: models.Session}, {model: models.Rental}]});
      return res;
    }

    async create(data) {
      const res = await models.Client.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = ClientsService;
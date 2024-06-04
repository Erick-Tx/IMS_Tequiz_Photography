const { models } = require('../libs/sequelize');

class RentalsService { 
  
    constructor() {}

    async find() {
      const res = await models.Rental.findAll({include:[{model: models.Product }, {model: models.Client }]});
      return res;
    }

    async findOne(id) {
      const res = await models.Rental.findByPk(id, {include:[{model: models.Product }, {model: models.Client }]});
      return res;
    }

    async create(data) {
      const res = await models.Rental.create(data);
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
  
  module.exports = RentalsService;
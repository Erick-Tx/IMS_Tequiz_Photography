const { models } = require('../libs/sequelize');

class PortfolioItemsService { 
  
    constructor() {}

    async find() {
      const res = await models.PortfolioItem.findAll({include:[{model: models.Session}]});
      return res;
    }

    async findOne(id) {
      const res = await models.PortfolioItem.findByPk(id, {include:[{model: models.Session }]});
      return res;
    }

    async create(data) {
      const res = await models.PortfolioItem.create(data);
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
  
  module.exports = PortfolioItemsService;
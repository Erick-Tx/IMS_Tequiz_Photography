const { models } = require('../libs/sequelize');

class PhotographersService { 
  
    constructor() {}

    async find() {
      const res = await models.Photographer.findAll({include:[{model: models.Session}]});
      return res;
    }

    async findOne(id) {
      const res = await models.Photographer.findByPk(id, {include:[{model: models.Session}]});
      return res;
    }

    async create(data) {
      const res = await models.Photographer.create(data);
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
  
  module.exports = PhotographersService;
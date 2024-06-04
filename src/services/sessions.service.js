const { models } = require('../libs/sequelize');

class SessionsService { 
  
    constructor() {}

    async find() {
      const res = await models.Session.findAll({include:[{model: models.Client }, {model: models.Equipment }]});
      return res;
    }

    async findOne(id) {
      const res = await models.Session.findByPk(id, {include:[{model: models.Client }, {model: models.Equipment }]});
      return res;
    }

    async create(data) {
      const res = await models.Session.create(data);
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
  
  module.exports = SessionsService;
const { Model, DataTypes, Sequelize } = require('sequelize');

const SESSION_TABLE = 'sessions';

class Session extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SESSION_TABLE,
            modelName: 'Session',
            timestamps: true
        }
    }
} 

const SessionSchema = {
    sessionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field:'date'
    },
    type:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'type'
    }, 
    place:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'place'
    }, 
    price:{
        allowNull: true,
        type: DataTypes.DECIMAL,
        field: 'price'
    }
}
Session.associate = models => {
    Session.belongsTo(models.Client);
    Session.belongsTo(models.Equipment);
    Session.belongsTo(models.Photographer);
    Session.belongsTo(models.Service);
    Session.hasOne(models.PortfolioItem);
}
  
module.exports = { Session, SessionSchema };
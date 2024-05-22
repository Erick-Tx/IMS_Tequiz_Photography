const { Model, DataTypes, Sequelize } = require('sequelize');

const SERVICE_TABLE = 'services';

class Service extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SERVICE_TABLE,
            modelName: 'Service',
            timestamps: true
        }
    }
} 

const ServiceSchema = {
    serviceID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name'
    },
    type: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'type'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'description'
    },
    price:{
        allowNull: true,
        type: DataTypes.DECIMAL,
        field: 'price'
    }
}
  
module.exports = { Service, ServiceSchema };
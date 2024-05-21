const { Model, DataTypes, Sequelize } = require('sequelize');

const CLIENT_TABLE = 'clients';

class Client extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CLIENT_TABLE,
            modelName: 'Client',
            timestamps: true
        }
    }
} 

const ClientSchema = {
    clientID: {
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
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'lastName'
    },
    idDocument: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'idDocument'
    },
    email:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'email'
    }, 
    phone:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'phone'
    }
}
  
module.exports = { Client, ClientSchema };
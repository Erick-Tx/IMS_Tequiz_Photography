const { Model, DataTypes, Sequelize } = require('sequelize');

const PHOTOGRAPHER_TABLE = 'photographers';

class Photographer extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PHOTOGRAPHER_TABLE,
            modelName: 'Photographer',
            timestamps: true
        }
    }
} 

const PhotographerSchema = {
    photographerID: {
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
    speciality:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'speciality'
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
    }, 
    availability:{
        allowNull: true,
        type: DataTypes.BOOLEAN,
        field: 'availability'
    }
}
  
module.exports = { Photographer, PhotographerSchema };
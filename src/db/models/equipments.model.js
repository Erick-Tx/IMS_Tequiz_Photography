const { Model, DataTypes, Sequelize } = require('sequelize');

const EQUIPMENT_TABLE = 'equipments';

class Equipment extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: EQUIPMENT_TABLE,
            modelName: 'Equipment',
            timestamps: true
        }
    }
} 

const EquipmentSchema = {
    equipmentID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    type: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'type'
    },
    brand: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'brand'
    },
    model: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'model'
    },
    condition:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'condition'
    }, 
    availability:{
        allowNull: true,
        type: DataTypes.BOOLEAN,
        field: 'availability'
    }
}
  
module.exports = { Equipment, EquipmentSchema };
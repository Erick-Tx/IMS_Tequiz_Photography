const { Model, DataTypes, Sequelize } = require('sequelize');


const RENTAL_TABLE = 'rentals';

class Rental extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: RENTAL_TABLE,
            modelName: 'Rental',
            timestamps: true
        }
    }
} 

const RentalSchema = {
    rentalID: {
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
    rentalDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field:'rentalDate'
    },
    returnDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field:'returnDate'
    },
    price:{
        allowNull: true,
        type: DataTypes.DECIMAL,
        field: 'price'
    },
    
}
Rental.associate = models => {
    Rental.belongsTo(models.Client);
    Rental.belongsTo(models.Product);
} 

  
module.exports = { Rental, RentalSchema };
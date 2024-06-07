const { Model, DataTypes, Sequelize } = require('sequelize');


const PRODUCT_TABLE = 'products';

class Product extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: true
        }
    }
} 

const ProductSchema = {
    productID: {
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
    },
    foto: {
        type: DataTypes.STRING,
        field: 'main_image',
        comment: 'Path to the main image file'
    }
}
Product.associate = models =>{
    Product.hasMany(models.Rental);
        
}
module.exports = { Product, ProductSchema };
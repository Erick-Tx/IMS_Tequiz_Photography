const { Model, DataTypes, Sequelize } = require('sequelize');

const PORTFOLIOITEM_TABLE = 'portfolios';

class PortfolioItem extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PORTFOLIOITEM_TABLE,
            modelName: 'PortfolioItem',
            timestamps: true
        }
    }
} 

const PortfolioItemSchema = {
    portfolioItemID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'title'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'description'
    },
    tag: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'tag'
    },
    mainImage: {
        type: DataTypes.STRING,
        field: 'main_image',
        comment: 'Path to the main image file'
    },
    additionalImages: {
        type: DataTypes.JSON,
        field: 'additional_images',
        comment: 'JSON array of paths to additional image files'
    }

}
PortfolioItem.associate = models => {
    PortfolioItem.belongsTo(models.Session);
    
}
  
module.exports = { PortfolioItem, PortfolioItemSchema };
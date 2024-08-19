const sequelize = require('../config/database');
const BaseModel = require('./clothBase');
const Sequelize = require("sequelize");

class Chemises extends BaseModel {}

Chemises.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    size: {
        type: Sequelize.DataTypes.ENUM('XXS/XS', 'S/M', 'L/XL', '2XL/3XL,Free-size'),
        allowNull: false,
    },
    clothId: {  // Foreign key to cloth_base
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'cloth_base',  // Matches the table name defined in ClothBase
            key: 'id'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Chemises',
    tableName: 'chemises',
});

// Association with BaseModel
Chemises.associate = (models) => {
    Chemises.belongsTo(models.BaseModel, { foreignKey: 'clothId', as: 'cloth' });
};

module.exports = Chemises;

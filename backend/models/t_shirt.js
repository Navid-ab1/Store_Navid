const sequelize = require('../config/database');
const BaseModel = require('./cloth_base');
const Sequelize = require("sequelize");

class Tshirt extends BaseModel {}

Tshirt.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    size: {
        type: Sequelize.DataTypes.ENUM('small', 'medium', 'large', 'x-large', 'xx-large', '3x-large'),
        allowNull: false,
    },
    // Additional fields specific to Tshirt can be added here if needed
    clothId: {  // Foreign key to ClothBase (BaseModel)
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'base_models',  // Matches the table name defined in ClothBase
            key: 'id'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Tshirt',
    tableName: 'tshirts',
});

// Define associations if Tshirt is related to other models
Tshirt.associate = (models) => {
    Tshirt.belongsTo(models.BaseModel, { foreignKey: 'clothId', as: 'cloth' });
    // Add other associations if necessary
};

module.exports = Tshirt;

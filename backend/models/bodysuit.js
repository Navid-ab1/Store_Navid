const sequelize = require('../config/database');
const BaseModel = require('./clothBase');
const Sequelize = require("sequelize");

class Bodysuit extends BaseModel {}

Bodysuit.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    size: {
        type: Sequelize.DataTypes.ENUM('XXS/XS', 'S/M', 'L/XL', '2XL/3XL'),
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
    modelName: 'Bodysuit',
    tableName: 'bodysuits',
});

// Association with BaseModel
Bodysuit.associate = (models) => {
    Bodysuit.belongsTo(models.BaseModel, { foreignKey: 'clothId', as: 'cloth' });
};

module.exports = Bodysuit;

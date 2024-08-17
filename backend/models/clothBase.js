const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ClothBase extends Model {}

ClothBase.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    size: {
        type: DataTypes.DECIMAL(2),
        allowNull: true,
    },
    color: {
        type: DataTypes.ENUM('Brown', 'Black', 'Green', 'Yellow', 'Grey', 'Blue', 'Red', 'Purple', 'White'),
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    Exist: {
        type: DataTypes.BOOLEAN,
    },
    item_number: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize,  // Pass the Sequelize instance
    modelName: 'ClothBase',
    tableName: 'cloth_base',
    timestamps: true,  // If you want createdAt and updatedAt fields
});

module.exports = ClothBase;

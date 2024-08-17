const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ClothBase = require('./clothBase');

class Croptop extends ClothBase {}

Croptop.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    size: {
        type: DataTypes.ENUM('XXS/XS', 'S/M', 'L/XL', '2XL/3XL'),
        allowNull: false,
    },
    clothId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cloth_base',  // Ensure this references the correct table
            key: 'id'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Croptop',
    tableName: 'croptops',
});
Croptop.belongsTo(ClothBase, { foreignKey: 'clothId', as: 'cloth' });
// Croptop.associate = (models) => {
//     Croptop.belongsTo(models.ClothBase, { foreignKey: 'clothId', as: 'cloth' });
// };

module.exports = Croptop;

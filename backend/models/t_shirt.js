const sequelize = require('../config/database');
const BaseModel = require('./cloth_base');
const Sequelize = require("sequelize");


class Tshirt extends BaseModel {
}

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


}, {
    sequelize,
    modelName: 'Tshirt',
    tableName: 'tshirts',
});

module.exports = Tshirt;
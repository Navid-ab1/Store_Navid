const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Shoes = sequelize.define('Shoes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
}, {
  tableName: 'shoes',  
  timestamps: true,

});

module.exports = Shoes;

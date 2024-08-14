const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Use your existing database config

const Product = sequelize.define('Product', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'products',
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

module.exports = Product;

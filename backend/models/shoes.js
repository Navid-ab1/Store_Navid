const sequelize = require('../config/database');
const Sequelize = require("sequelize");

const Shoes = sequelize.define('Shoes', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  brand: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
}, {
  tableName: 'shoes',
  timestamps: true,  // Adds createdAt and updatedAt fields automatically
});

module.exports = Shoes;

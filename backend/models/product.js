const Sequelize = require('sequelize');
// const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('store', 'root', 'Db381n#@', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

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
  timestamps: true,
});

module.exports = Product;

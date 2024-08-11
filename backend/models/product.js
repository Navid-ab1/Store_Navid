const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('store', 'root', 'Db381n#@', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'products', // Plural table name is conventional
  timestamps: true,
});

module.exports = Product;

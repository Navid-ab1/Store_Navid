const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');
const User = require('./user');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true  
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'reviews',
  timestamps: true,
});

Product.hasMany(Review, { foreignKey: 'product_id' });
Review.belongsTo(Product, { foreignKey: 'product_id' });

User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Review;

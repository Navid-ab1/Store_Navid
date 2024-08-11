const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('store', 'root', 'Db381n#@', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),  // Fixed ENUM import and renamed roll to role
    allowNull: false,
    defaultValue: 'user',
  },
});

sequelize.sync().then(() => {
  console.log('Tables have been synced successfully.');
}).catch(error => {
  console.error('Error syncing tables:', error);
});

module.exports = User;

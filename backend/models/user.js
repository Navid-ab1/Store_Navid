const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Use your existing database config
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user',
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },


}, {
    tableName: 'users',  // Define the table name explicitly
    timestamps: true,  // Add createdAt and updatedAt fields automatically
    hooks: {
        beforeCreate: async (user, options) => {

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
    }


});


sequelize.sync({alter: true})
    .then(() => {
        console.log('Tables have been synced successfully.');
    })
    .catch(error => {
        console.error('Error syncing tables:', error);
    });

module.exports = User;

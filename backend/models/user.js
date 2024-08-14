const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Use your existing database config

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
        // It's good practice to hash the password before storing it
    },
    role: {
        type: Sequelize.DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user',
    },
}, {
    tableName: 'users',  // Define the table name explicitly
    timestamps: true,  // Add createdAt and updatedAt fields automatically
    hooks: {
        beforeCreate: async (user, options) => {
            // Hash the password before storing it in the database
            const bcrypt = require('bcrypt');
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
});

// Sync the database (usually called in the main app file, not in the model)
sequelize.sync()
    .then(() => {
        console.log('Tables have been synced successfully.');
    })
    .catch(error => {
        console.error('Error syncing tables:', error);
    });

module.exports = User;

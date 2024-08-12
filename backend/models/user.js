const Sequelize = require('sequelize');
const sequelize = new Sequelize('store', 'root', 'Db381n#@', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

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
});

sequelize.sync().then(() => {
    console.log('Tables have been synced successfully.');
}).catch(error => {
    console.error('Error syncing tables:', error);
});

module.exports = User;

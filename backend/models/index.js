'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:Db381n%23%40@127.0.0.1:3306/store', {
    dialect: 'mysql'
});

const models = {};

// Import model classes without invoking them
models.BaseModel = require('./clothBase');
models.Tshirt = require('./tShirt');
models.Product = require('./product');
models.User = require('./user');
models.Review = require('./review');
models.Shoes = require('./shoes');
models.Pants = require('./pants');
models.Bodysuit = require('./bodysuit');
models.Bag = require('./bag');
models.Croptop = require('./croptop');
models.Chemise = require('./chemises');
models.Chemise = require('./skirts');

// Setup associations if any
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

// Sync all models with the database
sequelize.sync()
    .then(() => {
        console.log('Tables have been synced successfully.');
    })
    .catch(error => {
        console.error('Error syncing tables:', error);
    });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

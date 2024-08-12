'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const current_config = require('../config/config.json');
const env = process.env.NODE_ENV || 'production';

const basename = path.basename(__filename);
const config = current_config[env];
const db = {};

const dbUrl = process.env.DATABASE_URL || 'mysql://root:Db381n#%40@127.0.0.1:3306/store';
console.log("Database URL:", dbUrl);
const sequelize = new Sequelize('store', 'root', 'Db381n#@', {
    host: '127.0.0.1',
    dialect: 'mysql' // or 'mysql' or any other dialect you are using
});




// If DATABASE_URL is not set, it will fall back to the default value.
//
// let sequelize;
// if (config.use_env_variable) {
//   // Check if the environment variable exists and is defined
//   console.log( config.use_env_variable)
//   const connectionString = process.env["config.use_env_variable"];
//   if (!connectionString) {
//     console.log(connectionString)
//     throw new Error(`Environment variable ${config.use_env_variable} is not set.`);
//   }
//   sequelize = new Sequelize(connectionString, config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
//
// // Load models
// fs
//     .readdirSync(__dirname)
//     .filter(file => {
//       return (
//           file.indexOf('.') !== 0 &&
//           file !== basename &&
//           file.slice(-3) === '.js' &&
//           file.indexOf('.test.js') === -1
//       );
//     })
//     .forEach(file => {
//       const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//       db[model.name] = model;
//     });
//
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
//
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
//
// module.exports = db;

const BaseModel = require('./cloth_base');
const sequelize = require("../config/database");

class Pants extends BaseModel {}

Pants.init({}, {
  sequelize,
  modelName: 'Pants',
  tableName: 'pants',
});

module.exports = Pants;

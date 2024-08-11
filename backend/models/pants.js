const BaseModel = require('./cloth_base');

class Pants extends BaseModel {}

Pants.init({}, {
  sequelize,
  modelName: 'Pants',
  tableName: 'pants',
});

module.exports = Pants;

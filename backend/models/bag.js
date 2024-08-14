const sequelize = require('../config/database');
const BaseModel = require('./cloth_base');
const Sequelize = require("sequelize");

class Bag extends BaseModel {}

Bag.init({
  type_bag: {
    type: Sequelize.DataTypes.ENUM('ToteBag', 'CrossbodyBag', 'ClutchBag', 'ShoulderBag'),
    allowNull: false,
  },
  clothId: {  // Foreign key to cloth_base
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: 'base_models',  // Matches the table name defined in ClothBase
      key: 'id'
    },
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Bag',
  tableName: 'bags',
});

// Association with BaseModel
Bag.associate = (models) => {
  Bag.belongsTo(models.BaseModel, { foreignKey: 'clothId', as: 'cloth' });
};

module.exports = Bag;

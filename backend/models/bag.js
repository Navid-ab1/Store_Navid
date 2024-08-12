const sequelize = require('../config/database');
const BaseModel = require('./cloth_base');
const Sequelize = require("sequelize");

class Bag extends BaseModel {} 


Bag.init({
  type_bag: {
    type: Sequelize.DataTypes.ENUM('ToteBag', 'CrossbodyBag', 'ClutchBag', 'ShoulderBag'),
    allowNull: false,
  }
}, {
  sequelize:sequelize,  
  modelName: 'Bag',  
  tableName: 'bags',  
})

module.exports = Bag;  

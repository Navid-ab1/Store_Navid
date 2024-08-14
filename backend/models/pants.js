const BaseModel = require('./cloth_base');
const sequelize = require("../config/database");
const Sequelize = require("sequelize");

class Pants extends BaseModel {}

Pants.init({
  // Define any additional fields specific to Pants here, if any
  style: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  waist_size: {
    type: Sequelize.DataTypes.FLOAT,
    allowNull: false,
  },
  clothId: {  // Foreign key to cloth_base
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: 'base_models',  // References the table name defined in ClothBase
      key: 'id'
    },
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Pants',
  tableName: 'pants',
});

// Define associations if necessary
Pants.associate = (models) => {
  Pants.belongsTo(models.BaseModel, { foreignKey: 'clothId', as: 'cloth' });
};

module.exports = Pants;

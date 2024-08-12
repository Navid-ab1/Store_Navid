const sequelize = require('../config/database');
const BaseModel = require('./cloth_base');
const Sequelize = require("sequelize");



class Croptop extends BaseModel{}

Croptop.init({
    id:{
    type :Sequelize.DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true  
    },

    size:{
        type:Sequelize.DataTypes.ENUM('XXS/XS','S/M','L/XL','2XL/3XL'),
        allowNull:false,
    },


},{sequelize,
    modelName:'Croptop',
    tableName:'croptops',
});

module.exports = Croptop;
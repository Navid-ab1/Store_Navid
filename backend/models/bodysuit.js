const { Sequelize, DataTypes, Model, INTEGER, FLOAT } = require('sequelize');
const sequelize = require('../config/database');
const { DECIMAL, ENUM } = require('mysql/lib/protocol/constants/types');
const BaseModel = require('./cloth_base');



class Bodysuit extends BaseModel{}

Bodysuit.init({
    id:{
    type :DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true  
    },

    size:{
        type:DataTypes.ENUM('XXS/XS','S/M','L/XL','2XL/3XL'),
        allowNull:false,
    },


},{sequelize,
    modelName:'Bodysuit',
    tableName:'bodysuits',
});

module.exports = Bodysuit;
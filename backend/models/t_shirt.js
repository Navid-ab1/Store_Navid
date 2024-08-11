const { Sequelize, DataTypes, Model, INTEGER, FLOAT } = require('sequelize');
const sequelize = require('../config/database');
const { DECIMAL, ENUM } = require('mysql/lib/protocol/constants/types');
const BaseModel = require('./cloth_base');



class Tshirt extends BaseModel{}

Tshirt.init({
    id:{
    type :DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true  
    },

    size:{
        type:DataTypes.ENUM('small','medium','large','x-large','xx-large','3x-large'),
        allowNull:false,
    },


},{sequelize,
    modelName:'Tshirt',
    tableName:'tshirts',
});

module.exports = Tshirt;
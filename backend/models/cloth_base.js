const  Model = require('sequelize');
const sequelize = require('../config/database');
const Sequelize = require("sequelize");

class BaseModel extends Model{}

BaseModel.init({
    id:{
    type:Sequelize.DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true  
    },

    size:{
        type:Sequelize.DataTypes.DECIMAL(2),
        allowNull:true,
    },

    color:{
        type:Sequelize.DataTypes.ENUM('Brown','Black','Green','Yellow','Grey','Blue','Red','Purple','Yellow','White'),
        allowNull:false,
    },
    price:{
        type:Sequelize.DataTypes.FLOAT,
        allowNull:false,
        
    },
    description:{
        type:Sequelize.DataTypes.TEXT,
    },
    Exist:{
        type:Sequelize.DataTypes.BOOLEAN,
    },
    item_number:{
        type:Sequelize.DataTypes.INTEGER,
    },

},{  sequelize, 
    modelName: 'BaseModel',
    timestamps: true,
    tableName: 'base_models',});

module.exports = BaseModel;
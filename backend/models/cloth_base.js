const { Sequelize, DataTypes, Model, INTEGER, FLOAT } = require('sequelize');
const sequelize = require('../config/database');
const { DECIMAL, ENUM } = require('mysql/lib/protocol/constants/types');
const { text } = require('express');

class BaseModel extends Model{}

BaseModel.init({
    id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true  
    },

    size:{
        type:DataTypes.DECIMAL(2),
        allowNull:true,
    },

    color:{
        type:DataTypes.ENUM('Brown','Black','Green','Yellow','Grey','Blue','Red','Purple','Yellow','White'),
        allowNull:false,
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
        
    },
    description:{
        type:DataTypes.text,
    },
    Exist:{
        type:DataTypes.Boolean,
    },
    item_number:{
        type:DataTypes.INTEGER,
    },

});
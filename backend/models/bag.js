const { Sequelize, DataTypes, Model, INTEGER, FLOAT } = require('sequelize');
const sequelize = require('../config/database');
const { DECIMAL, ENUM } = require('mysql/lib/protocol/constants/types');
const BaseModel = require('./cloth_base');


class Bag extends BaseModel{}
Bag.init({
    type_bag:{
        type :DataTypes.ENUM('Tote Bag','Crossbody Bag','Clutch Bag','Shoulder Bag'),}

});
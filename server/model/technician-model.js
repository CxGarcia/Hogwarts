const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Order = require("./orders-model");



const Technician = sequelize.define('Technician', {

  Order: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,

  },

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});


// Technician.hasMany(Order);

module.exports = Technician;

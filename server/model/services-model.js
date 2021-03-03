const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Service = sequelize.define('Service', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,

  },

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});


module.exports = Service;

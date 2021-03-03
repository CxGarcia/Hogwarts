const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Order = require('./orders-model');



const Customer = sequelize.define('Customer', {
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
  phone: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Must be a valid email address",
      }
    }
  },
  password: {
    type: DataTypes.STRING(1234),
    allowNull: false,

  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,

  },

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});


Customer.hasMany(Order);

module.exports = Customer;

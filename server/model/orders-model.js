const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Service = require('./services-model');
const Technician = require('./technician-model');
const Customer = require('./customer-model');



const Order = sequelize.define('Order', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  cost: {
    type: DataTypes.DECIMAL,
    allowNull: false,

  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});


// Order.hasOne(Service);
// Order.hasOne(Technician);
// Order.hasOne(Customer);

module.exports = Order;

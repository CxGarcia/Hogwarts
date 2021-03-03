const { Sequelize } = require('sequelize');
const dbConfig = require("./config/db.config");


// Create a connection to the database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;
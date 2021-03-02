const mysql = require("mysql2");
const dbConfig = require("./config/db.config");


// Create a connection to the database
const dbConnection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


module.exports = dbConnection;
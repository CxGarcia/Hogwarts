const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const mysql = require("mysql2");
const router = require('./router');
const dbConfig = require("./config/db.config");

const app = express();


if (app.get('env') === 'development') {
  app.use(morgan("tiny"));
  console.log("morgan Enabled...");
}


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);




// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the databas 🕺🏻🎯");
});




const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port} 🚀🕺🏻🎯🚀`));


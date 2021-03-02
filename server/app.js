const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser')

const router = require('./router');
const dbConnection = require('./db');

const app = express();


if (app.get('env') === 'development') {
  app.use(morgan("tiny"));
  console.log("morgan Enabled...");
}



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);


// MySQL connection
dbConnection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database 🕺🏻🎯");
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port} 🚀🕺🏻🎯🚀`));


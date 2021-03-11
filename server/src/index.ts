import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config();
const router = require('./router');
const app = express();

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('morgan Enabled...');
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port} 🚀🕺🏻🎯🚀`));

// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const router = require('../router');

// require('dotenv').config();

// const app = express();

// if (app.get('env') === 'development') {
//   app.use(morgan('tiny'));
//   console.log('morgan Enabled...');
// }

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(router);

// const port = process.env.PORT;
// app.listen(port, () => console.log(`App listening on port ${port} 🚀🕺🏻🎯🚀`));

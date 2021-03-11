import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import * as dotenv from 'dotenv';

dotenv.config();

import router from './router';
const app = express();

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('morgan Enabled...');
}

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => console.log(`App listening on port ${port} 🚀🕺🏻🎯🚀`));

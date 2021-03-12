import { Sequelize } from 'sequelize';
import { ServiceFactory } from './services-model';
import { TechnicianFactory } from './technician-model';
import { CustomerFactory } from './customer-model';
import { OrderFactory } from './orders-model';

const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(__dirname + '/../config/config.js')[env];

export const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export const Order = OrderFactory(db);
export const Service = ServiceFactory(db);
export const Customer = CustomerFactory(db);
export const Technician = TechnicianFactory(db);

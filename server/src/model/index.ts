import { Sequelize } from 'sequelize';
import { ServiceFactory } from './services-model';
import { TechnicianFactory } from './technician-model';
import { CustomerFactory } from './customer-model';
import { OrderFactory } from './orders-model';

const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(__dirname + '/../config/config.js')[env];

export const db = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect,
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

//Factories
const Order = OrderFactory(db);
const Service = ServiceFactory(db);
const Customer = CustomerFactory(db);
const Technician = TechnicianFactory(db);

//Associations
Order.belongsTo(Service, {
  foreignKey: 'serviceId'
});
Order.belongsTo(Technician, {
  foreignKey: 'technicianId'
});

Order.belongsTo(Customer, {
  foreignKey: 'customerId'
});

Customer.hasMany(Order, {
  sourceKey: 'id',
  as: 'orders',
  constraints: false
});

Service.hasMany(Order, {
  sourceKey: 'id',
  as: 'orders',
  constraints: false
});

Technician.hasMany(Order, {
  sourceKey: 'id',
  as: 'orders',
  constraints: false
});

export { Order, Service, Customer, Technician };

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const mocks = require('./mocksOrders.json');
const server = require('../dist/index');
const request = require('supertest');
const { expect } = require('chai');
const { db } = require('../dist/model/index');

describe('Orders route: ', () => {
  let _server;

  before(async () => {
    _server = request(server);
  });

  afterEach(async () => {
    await db.sync({ force: true });
  });

  beforeEach(async () => {
    await _server.post('/technician').set('Content-Type', 'application/json').send(mocks.mockTechnician1);
    await _server.post('/signUp').set('Content-Type', 'application/json').send(JSON.stringify(mocks.mockUser1));
    await _server.post('/service').set('Content-Type', 'application/json').send(mocks.mockService1);
  });

  it('should create a new order', async () => {
    const res = await _server.post('/addOrder').set('Content-Type', 'application/json').send(mocks.mockOrder1);
    expect(res.statusCode).equal(201);
    expect(res.body.cost).equal(mocks.mockOrder1.cost.toString());
  });

  it('should get all orders linked to associated tables', async () => {
    await _server.post('/addOrder').set('Content-Type', 'application/json').send(mocks.mockOrder1);

    const res = await _server.get('/orders');
    expect(res.statusCode).equal(200);
    expect(res.body.length).equal(1);
    expect(res.body[0].service.name).equal(mocks.mockService1.name);
    expect(res.body[0].technician.name).equal(mocks.mockTechnician1.name);
    expect(res.body[0].customer.name).equal(mocks.mockUser1.name);
  });

  it('should get the orders by customerId linked to associated tables', async () => {
    await _server.post('/addOrder').set('Content-Type', 'application/json').send(mocks.mockOrder1);

    const res = await _server.get('/orders/1');
    expect(res.statusCode).equal(200);
    expect(res.body.service.name).equal(mocks.mockService1.name);
    expect(res.body.technician.name).equal(mocks.mockTechnician1.name);
    expect(res.body.customer.name).equal(mocks.mockUser1.name);
  });

  // it('should create a new order and return the same order when all are fetched', async (done) => {
  //   const post_res = await _server.post('/addOrder').set('Content-Type', 'application/json').send(mocks.mockOrder2);
  //   expect(post_res.statusCode).equal(201);
  //   expect(post_res.body.cost).equal(mocks.mockOrder2.cost);

  //   const get_res = await _server.get('/orders');
  //   const { cost, paymentMethod, technicianId, customerId, serviceId } = get_res.body[0];
  //   expect(cost).equal(mocks.mockService2.cost);
  //   expect(get_res.statusCode).equal(200);
  //   done();
  // });
});

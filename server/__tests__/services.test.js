/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const mocks = require('./mocksServices.json');
const server = require('../dist/index');
const request = require('supertest');
const { expect } = require('chai');
const { db } = require('../dist/model/index');

describe('Services route: ', () => {
  let _server;

  before(() => {
    _server = request(server);
  });

  afterEach(async () => {
    await db.sync({ force: true });
  });

  it('should get all services', async () => {
    const res = await _server.get('/services');

    expect(res.statusCode).equal(200);
  });

  it('should create a new service', async () => {
    const res = await _server.post('/service').set('Content-Type', 'application/json').send(mocks.mockService1);
    expect(res.statusCode).equal(201);
    expect(res.body.name).equal(mocks.mockService1.name);
  });
  it('should create a new service and return the same service when all are fetched', async () => {
    const post_res = await _server.post('/service').set('Content-Type', 'application/json').send(mocks.mockService2);
    expect(post_res.statusCode).equal(201);
    expect(post_res.body.name).equal(mocks.mockService2.name);

    const get_res = await _server.get('/services');
    const { name } = get_res.body[0];

    expect(name).equal(mocks.mockService2.name);
    expect(get_res.statusCode).equal(200);
  });

  it('should create a new service, return the same service when all are fetched and delete the service successfully', async () => {
    const post_res = await _server.post('/service').set('Content-Type', 'application/json').send(mocks.mockService2);

    expect(post_res.statusCode).equal(201);
    expect(post_res.body.name).equal(mocks.mockService2.name);

    const get_res = await _server.get('/services');
    const { name, id } = get_res.body[0];

    expect(name).equal(mocks.mockService2.name);
    expect(get_res.statusCode).equal(200);

    const del_res = await _server.delete(`/service/${id}`);
    expect(del_res.statusCode).equal(200);
    expect(del_res.text).equal('Service Deleted');
  });

  it('should create a new service, update it, and return the new name', async () => {
    const post_res = await _server.post('/service').set('Content-Type', 'application/json').send(mocks.mockService1);
    const { name, id } = post_res.body;
    expect(post_res.statusCode).equal(201);
    expect(name).equal(mocks.mockService1.name);

    const put_res = await _server.put(`/service/${id}`).set('Content-Type', 'application/json').send(mocks.mockService2);
    expect(put_res.statusCode).equal(200);
    expect(put_res.text).equal('Service Updated');
  });
});

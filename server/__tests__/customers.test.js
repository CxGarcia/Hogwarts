const mocks = require('./mocks.json');
const server = require('../dist/index');
const request = require('supertest');
const { expect } = require('chai');
const { db } = require('../dist/model/index');

describe('Customers route: ', () => {
  let _server;

  before(() => {
    _server = request(server);
  });

  afterEach(async () => {
    await db.sync({ force: true });
  });

  it('should fetch customers', async () => {
    const res = await _server.get('/customers');

    expect(res.statusCode).equal(200);
  });

  it('should create a new customer', async () => {
    const res = await _server.post('/signUp').set('Content-Type', 'application/json').send(mocks.mockIncompleteUser4);
    expect(res.statusCode).equal(201);
    expect(res.body.name).equal(mocks.mockIncompleteUser4.name);
    expect(res.body.email).equal(mocks.mockIncompleteUser4.email);
    expect(res.body.phone).equal(mocks.mockIncompleteUser4.phone);
  });
  it('should create a new customer and return the same customer when all are fetched', async () => {
    const post_res = await _server.post('/signUp').set('Content-Type', 'application/json').send(mocks.mockIncompleteUser4);
    expect(post_res.statusCode).equal(201);
    expect(post_res.body.name).equal(mocks.mockIncompleteUser4.name);
    expect(post_res.body.email).equal(mocks.mockIncompleteUser4.email);
    expect(post_res.body.phone).equal(mocks.mockIncompleteUser4.phone);

    const { id } = post_res.body;

    const get_res = await _server.get(`/customer/${id}`);
    const { name, email, phone } = get_res.body;

    expect(name).equal(mocks.mockIncompleteUser4.name);
    expect(email).equal(mocks.mockIncompleteUser4.email);
    expect(phone).equal(mocks.mockIncompleteUser4.phone);
    expect(get_res.statusCode).equal(200);
  });
});

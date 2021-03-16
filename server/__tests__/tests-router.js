const mocks = require('./mocks.json');
const server = require('../dist/index');
const request = require('supertest');
const { expect } = require('chai');
const { db } = require('../dist/model/index');

describe('Session Server: ', () => {
  afterEach(async () => {
    await db.sync({ force: true });
  });

  it('should get customers', async () => {
    const res = await request(server).get('/customers');

    expect(res.statusCode).equal(200);
  });

  it('should create a new user', async () => {
    const res = await request(server).post('/signUp').set('Content-Type', 'application/json').send(JSON.stringify(mocks.mockUser1));
    expect(res.statusCode).equal(201);
  });

  it('should create a new technician', async () => {
    const res = await request(server).post('/technician').set('Content-Type', 'application/json').send(mocks.mockIncompleteUser4);
    expect(res.statusCode).equal(201);
    expect(res.body.name).equal(mocks.mockIncompleteUser4.name);
    expect(res.body.email).equal(mocks.mockIncompleteUser4.email);
    expect(res.body.phone).equal(mocks.mockIncompleteUser4.phone);
  });
});

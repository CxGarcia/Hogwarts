const mocks = require('./mocks');
const server = require('../dist/index');
const request = require('supertest');
const { expect } = require('chai');
const { db } = require('../dist/model/index');
const { endsWith } = require('sequelize/types/lib/operators');

describe('Session Server: ', () => {
  afterEach(async () => {
    await db.sync({ force: true });
  });

  it('should get customers', async () => {
    const res = await request(server).get('/customers');

    expect(res.statusCode).equal(200);
  });

  it('should create a new user', async () => {
    const res = await request(server).post('/signUp').set('Content-Type', 'application/json').send(mocks.mockUser1);

    expect(res.statusCode).equal(201);
  });
});

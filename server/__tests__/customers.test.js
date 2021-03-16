const mocks = require('./mocks.json');
const server = require('../dist/index');
const request = require('supertest');
const { expect } = require('chai');
const { db } = require('../dist/model/index');

describe('Session Server: ', () => {
  afterEach(async () => {
    await db.sync({ force: true });
  });

  describe('Main tests: ', () => {
    it('should return a 404 page and status code if the route does not exist', async () => {
      const res = await request(server).get('/afdjvhs');
      expect(res.statusCode).equal(404);
    });
  });

  it('should get customers', async () => {
    const res = await request(server).get('/customers');

    expect(res.statusCode).equal(200);
  });

  it('should create a new user', async () => {
    const res = await request(server).post('/signUp').set('Content-Type', 'application/json').send(JSON.stringify(mocks.mockUser1));
    expect(res.statusCode).equal(201);
  });
});

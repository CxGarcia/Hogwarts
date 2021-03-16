const mocks = require('./mocks.json');
const server = require('../dist/index');
const request = require('supertest');
const { expect } = require('chai');
const { db } = require('../dist/model/index');

describe('Technicians route: ', () => {
  let _server;

  before(() => {
    _server = request(server);
  });

  afterEach(async () => {
    await db.sync({ force: true });
  });

  it('should get all technicians', async () => {
    const res = await _server.get('/technicians');

    expect(res.statusCode).equal(200);
  });

  it('should create a new technician', async () => {
    const res = await _server.post('/technician').set('Content-Type', 'application/json').send(mocks.mockIncompleteUser4);
    expect(res.statusCode).equal(201);
    expect(res.body.name).equal(mocks.mockIncompleteUser4.name);
    expect(res.body.email).equal(mocks.mockIncompleteUser4.email);
    expect(res.body.phone).equal(mocks.mockIncompleteUser4.phone);
  });
  it('should create a new technician and return the same technician when all are fetched', async () => {
    const post_res = await _server.post('/technician').set('Content-Type', 'application/json').send(mocks.mockIncompleteUser4);
    expect(post_res.statusCode).equal(201);
    expect(post_res.body.name).equal(mocks.mockIncompleteUser4.name);
    expect(post_res.body.email).equal(mocks.mockIncompleteUser4.email);
    expect(post_res.body.phone).equal(mocks.mockIncompleteUser4.phone);

    const get_res = await _server.get('/technicians');
    const { name, email, phone } = get_res.body[0];

    expect(name).equal(mocks.mockIncompleteUser4.name);
    expect(email).equal(mocks.mockIncompleteUser4.email);
    expect(phone).equal(mocks.mockIncompleteUser4.phone);
    expect(get_res.statusCode).equal(200);
  });

  it('should create a new technician, return the same technician when all are fetched and delete the technician successfully', async () => {
    const post_res = await _server.post('/technician').set('Content-Type', 'application/json').send(mocks.mockUser2);

    expect(post_res.statusCode).equal(201);
    expect(post_res.body.name).equal(mocks.mockUser2.name);
    expect(post_res.body.email).equal(mocks.mockUser2.email);
    expect(post_res.body.phone).equal(mocks.mockUser2.phone);

    const get_res = await _server.get('/technicians');
    const { name, email, phone, id } = get_res.body[0];

    expect(name).equal(mocks.mockUser2.name);
    expect(email).equal(mocks.mockUser2.email);
    expect(phone).equal(mocks.mockUser2.phone);
    expect(get_res.statusCode).equal(200);

    const del_res = await _server.delete(`/technician/${id}`);
    expect(del_res.statusCode).equal(200);
    expect(del_res.text).equal('Technician Deleted');
  });
});

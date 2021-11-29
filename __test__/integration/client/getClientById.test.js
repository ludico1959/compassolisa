const request = require('supertest');
const app = require('../../../src/app/app');
const { ClientDataFaker } = require('../../support/datafaker');

describe('list client by its ID', () => {
  it('should return status code 200', async () => {
    const clientMock = ClientDataFaker();

    const responsePost = await request(app).post('/api/v1/people/').send(clientMock);

    const responseGet = await request(app).get(`/api/v1/people/${responsePost.body._id}`);

    expect(responseGet.status).toBe(200);
  });
});

const request = require('supertest');
const app = require('../../../src/app/app');
const { ClientDataFaker } = require('../../support/datafaker');

describe('list client by its ID', () => {
  it('should return status code 204', async () => {
    const clientMock = ClientDataFaker();

    const responsePost = await request(app).post('/api/v1/people/').send(clientMock);

    const responseDelete = await request(app).delete(`/api/v1/people/${responsePost.body._id}`);

    expect(responseDelete.status).toBe(204);
  });
});

const request = require('supertest');
const app = require('../../../src/app/app');
const { ClientDataFaker } = require('../../support/datafaker');

describe('add a new client', () => {
  it('should return status code 200', async () => {
    const clientMock = ClientDataFaker();

    await request(app).post('/api/v1/people/').send(clientMock);

    const response = await request(app).get('/api/v1/people/').send(clientMock);
    expect(response.status).toBe(200);
  });

  it('should return the same properties from clientMock except the password', async () => {
    const clientMock = ClientDataFaker();

    await request(app).post('/api/v1/people/').send(clientMock);

    const response = await request(app).get('/api/v1/people/');
    const { body } = response;
    const { pessoas } = body;
    expect(pessoas[0].nome).toBe(clientMock.nome);
    expect(pessoas[0].cpf).toBe(clientMock.cpf);
    expect(pessoas[0].data_nascimento).toBe(clientMock.data_nascimento);
    expect(pessoas[0].email).toBe(clientMock.email);
    expect(pessoas[0].habilitado).toBe(clientMock.habilitado);
  });
});

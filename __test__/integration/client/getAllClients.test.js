const request = require('supertest');
const { ClientDataFaker } = require('../../support/datafaker');
const app = require('../../../src/app/app');

describe('Add a new client', () => {
  it('should return status code 200', async () => {
    const clientMock01 = ClientDataFaker();

    await request(app).post('/api/v1/people/').send(clientMock01);

    const { statusCode } = await request(app).get('/api/v1/people/').send(clientMock01);
    expect(statusCode).toBe(200);
  });

  it('should return status code 200', async () => {
    const clientMock02 = ClientDataFaker();

    await request(app).post('/api/v1/people/').send(clientMock02);

    const response = await request(app).get('/api/v1/people/');
    const { body } = response;
    const { pessoas } = body;
    expect(pessoas[0].nome).toBe(clientMock02.nome);
    expect(pessoas[0].cpf).toBe(clientMock02.cpf);
    expect(pessoas[0].data_nascimento).toBe(clientMock02.data_nascimento);
    expect(pessoas[0].email).toBe(clientMock02.email);
    expect(pessoas[0].habilitado).toBe(clientMock02.habilitado);
  });
});

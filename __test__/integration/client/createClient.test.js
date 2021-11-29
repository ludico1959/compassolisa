const request = require('supertest');
const { ClientDataFaker } = require('../../support/datafaker');
const app = require('../../../src/app/app');

describe('Add a new client', () => {
  it('should return status code 201', async () => {
    const clientMock = ClientDataFaker();

    const response = await request(app).patch('/api/v1/people/').send(clientMock);
    expect(response.status).toBe(201);
  });

  it('returns bad request when some propertie is missing', async () => {
    const clientMock = {
      nome: 'Fulano de Tal',
      cpf: '437.398.780-70',
      data_nascimento: '12/12/1992',
      email: 'fulano@email.com',
      senha: '123456',
      habilitado: ''
    };

    const response = await request(app).post('/api/v1/people/').send(clientMock);
    expect(response.status).toEqual(400);
  });
});

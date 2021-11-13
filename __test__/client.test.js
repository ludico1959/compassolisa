const request = require('supertest');
const app = require('../src/app/app');
require('../src/app/schema/ClientSchema');

describe('listar todos os clientes', () => {
  it('retornar status 200', async () => {
    jest.setTimeout(100000);
    const clientMock = {
      nome: 'joaozinho ciclano',
      cpf: '131.147.860-49',
      data_nascimento: '02/03/1994',
      email: 'joazinho@email.com',
      senha: '123456',
      habilitado: 'sim'
    };

    await request(app).post('/api/v1/people/').send(clientMock);
    const response = await request(app).get('/api/v1/people/');
    const { body } = response;
    const { pessoas } = body;
    expect(pessoas[0].nome).toBe(clientMock.nome);
    expect(pessoas[0].cpf).toBe(clientMock.cpf);
    expect(pessoas[0].data_nascimento).toBe(clientMock.data_nascimento);
    expect(pessoas[0].email).toBe(clientMock.email);
    expect(pessoas[0].habilitado).toBe(clientMock.habilitado);
    const { status } = response;
    expect(status).toBe(200);
  });
});

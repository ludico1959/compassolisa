// const request = require('supertest');
// const app = require('../../../src/app/app');
// const { ClientDataFaker } = require('../../support/datafaker');

// describe('list client by its ID', () => {
//   it('should return status code 200', async () => {
//     const clientMock = ClientDataFaker();

//     const clientMockNewProperties = {
//       cpf: '221.096.490-38',
//       email: 'fulano.tal@gmail.com'
//     };

//     const responsePost = await request(app).post('/api/v1/people/').send(clientMock);

//     const responsePatch = await request(app).patch(`/api/v1/people/${responsePost.body._id}`);

//     expect(responsePatch.status).toBe(200);
//   });
// });

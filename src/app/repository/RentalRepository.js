const axios = require('axios').default;
const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async addOffice(payloadBody) {
    for (let i = 0; i < payloadBody.endereco.length; i++) {
      const seachCep = await axios
        .get(`https://viacep.com.br/ws/${payloadBody.endereco[i].cep}/json`)
        .then((response) => response.data);
      const { logradouro, complemento, bairro, localidade, uf } = seachCep;
      payloadBody.endereco[i].logradouro = logradouro;
      payloadBody.endereco[i].complemento = complemento;
      payloadBody.endereco[i].bairro = bairro;
      payloadBody.endereco[i].localidade = localidade;
      payloadBody.endereco[i].uf = uf;
    }
    return RentalSchema.create(payloadBody);
  }

  async listOffices(payloadQuery) {
    return RentalSchema.paginate(payloadQuery, {
      page: payloadQuery.page || 1,
      limit: 2
    });
  }

  async listOfficeById(payloadQuery) {
    return RentalSchema.findById(payloadQuery);
  }

  async updateOfficeById(payloadQuery, payloadBody) {
    return RentalSchema.findByIdAndUpdate(payloadQuery, payloadBody);
  }

  async deleteOfficeById(payloadQuery) {
    return RentalSchema.findByIdAndDelete(payloadQuery);
  }
}

module.exports = new RentalRepository();

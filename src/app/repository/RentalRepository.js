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
    const { page = 1, limit = 100, ...query } = payloadQuery;
    return RentalSchema.paginate(
      { ...query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * Number(limit)
      }
    );
  }

  async listOfficeById(payloadQuery) {
    return RentalSchema.findById(payloadQuery);
  }

  async updateOfficeById(payloadQuery, payloadBody) {
    return RentalSchema.findByIdAndUpdate(payloadQuery, payloadBody);
  }

  async removeOfficeById(payloadQuery) {
    return RentalSchema.findByIdAndDelete(payloadQuery);
  }
}

module.exports = new RentalRepository();

const ClientRepository = require('../repository/ClientRepository');
const DateUtils = require('../utils/dateUtils');

class ClientService {
  async addClient(payloadBody) {
    payloadBody.data_nascimento = await DateUtils.formatToDatabase(payloadBody.data_nascimento);

    const result = await ClientRepository.addClient(payloadBody);
    return result;
  }

  async listClients(payloadQuery) {
    const result = await ClientRepository.listClients(payloadQuery);
    return result;
  }

  async findClientById(payloadParam) {
    const result = await ClientRepository.findClientById(payloadParam);
    return result;
  }

  async removeClientById(payloadParam) {
    const result = await ClientRepository.removeClientById(payloadParam);
    return result;
  }

  async updateClientById(payloadParam, payloadBody) {
    const result = await ClientRepository.updateClientById(payloadParam, payloadBody);
    return result;
  }
}

module.exports = new ClientService();

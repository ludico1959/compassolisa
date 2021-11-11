const ClientRepository = require('../repository/ClientRepository');
const DateUtils = require('../utils/dateUtils');
const ClientIdNotFound = require('../errors/client/ClientIdNotFound');
// const MinorUnder18yo = require('../errors/client/MinorUnder18yo');

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
    if (!result) throw new ClientIdNotFound(payloadParam);
    return result;
  }

  async removeClientById(payloadParam) {
    const result = await ClientRepository.removeClientById(payloadParam);
    if (!result) throw new ClientIdNotFound(payloadParam);
    return result;
  }

  async updateClientById(payloadParam, payloadBody) {
    const result = await ClientRepository.updateClientById(payloadParam, payloadBody);
    if (!result) throw new ClientIdNotFound(payloadParam);
    return result;
  }
}

module.exports = new ClientService();

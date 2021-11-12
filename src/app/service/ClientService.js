const ClientRepository = require('../repository/ClientRepository');
const ClientIdNotFound = require('../errors/client/ClientIdNotFound');
const DateUtils = require('../utils/DateUtils');
const cpfValidator = require('../validation/client/cpfValidator');
const duplicateDataUtils = require('../validation/duplicateDataValidator');

class ClientService {
  async addClient(payloadBody) {
    await cpfValidator.testCpf(payloadBody.cpf);
    await duplicateDataUtils.duplicatedCpf(payloadBody.cpf);
    await duplicateDataUtils.duplicatedEmail(payloadBody.email);

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
    if (payloadBody.cpf) {
      await cpfValidator.testCpf(payloadBody.cpf);
      await duplicateDataUtils.duplicatedCpf(payloadBody.cpf);
    }

    if (payloadBody.email) {
      await duplicateDataUtils.duplicatedEmail(payloadBody.email);
    }

    const result = await ClientRepository.updateClientById(payloadParam, payloadBody);
    if (!result) throw new ClientIdNotFound(payloadParam);
    return result;
  }
}

module.exports = new ClientService();

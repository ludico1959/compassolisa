const ClientRepository = require('../repository/ClientRepository');
const ClientIdNotFound = require('../errors/client/ClientIdNotFound');
const DateUtils = require('../utils/DateUtils');
const CpfUtils = require('../utils/CpfUtils');
const DuplicateDataUtils = require('../utils/DuplicateDataUtils');

class ClientService {
  async addClient(payloadBody) {
    await CpfUtils.testCpf(payloadBody.cpf);
    await DuplicateDataUtils.duplicatedCpf(payloadBody.cpf);
    await DuplicateDataUtils.duplicatedEmail(payloadBody.email);

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
      await CpfUtils.testCpf(payloadBody.cpf);
      await DuplicateDataUtils.duplicatedCpf(payloadBody.cpf);
    }

    if (payloadBody.email) {
      await DuplicateDataUtils.duplicatedEmail(payloadBody.email);
    }

    const result = await ClientRepository.updateClientById(payloadParam, payloadBody);
    if (!result) throw new ClientIdNotFound(payloadParam);
    return result;
  }
}

module.exports = new ClientService();

const ClientSchema = require('../schema/ClientSchema');

class ClientRepository {
  async addClient(payloadBody) {
    const result = await ClientSchema.create(payloadBody);
    return result;
  }

  async listClients(payloadQuery) {
    const { page = 1, limit = 100, ...query } = payloadQuery;
    return ClientSchema.paginate(
      { ...query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * Number(limit)
      }
    );
  }

  async findClientById(payloadParam) {
    return ClientSchema.findById(payloadParam);
  }

  async removeClientById(payloadParam) {
    return ClientSchema.findByIdAndDelete(payloadParam);
  }

  async updateClientById(payloadParam, payloadBody) {
    return ClientSchema.findByIdAndUpdate(payloadParam, payloadBody);
  }

  async findClientByEmail(email) {
    return ClientSchema.findOne({ email });
  }
}

module.exports = new ClientRepository();

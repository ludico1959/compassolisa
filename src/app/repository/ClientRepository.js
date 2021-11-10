const ClientSchema = require('../schema/ClientSchema');

class ClientRepository {
  async addClient(payloadBody) {
    try {
      const result = await ClientSchema.create(payloadBody);
      return result;
    } catch (error) {
      return error
    }
    
  }

  async listClients(payloadQuery) {
    return ClientSchema.paginate(payloadQuery, {
      page: payloadQuery.page || 1,
      limit: 2
    });
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

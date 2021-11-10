const { paginateSeriealize, serialize } = require('../seriealize/clientSerialize');
const ClientService = require('../service/ClientService');

class ClientController {
  async addClient(req, res) {
    const client = await ClientService.addClient(req.body);
    return res.status(201).json(serialize(client));
  }

  async listClients(req, res) {
    const clients = await ClientService.listClients(req.query);
    return res.status(200).json(paginateSeriealize(clients));
  }

  async findClientById(req, res) {
    const client = await ClientService.findClientById(req.params.id);
    return res.status(200).json({ client });
  }

  async removeClientById(req, res) {
    await ClientService.removeClientById(req.params.id);
    return res.status(204).json({});
  }

  async updateClientById(req, res) {
    const client = await ClientService.updateClientById(req.params.id, req.body);
    return res.status(200).json(serialize(client));
  }
}

module.exports = new ClientController();

const { paginateSeriealize, serialize } = require('../seriealize/clientSerialize');
const ClientService = require('../service/ClientService');

class ClientController {
  async addClient(req, res) {
    try {
      const client = await ClientService.addClient(req.body);
      return res.status(201).json(serialize(client));
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async listClients(req, res) {
    try {
      const clients = await ClientService.listClients(req.query);
      return res.status(200).json(paginateSeriealize(clients));
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async findClientById(req, res) {
    try {
      const client = await ClientService.findClientById(req.params.id);
      return res.status(200).json({ client });
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async removeClientById(req, res) {
    try {
      await ClientService.removeClientById(req.params.id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async updateClientById(req, res) {
    try {
      const client = await ClientService.updateClientById(req.params.id, req.body);
      return res.status(200).json(serialize(client));
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }
}

module.exports = new ClientController();

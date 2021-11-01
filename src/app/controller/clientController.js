const ClientService = require('../service/ClientService')

class ClientController {
    async addClient(req, res) {
        const client = await ClientService.addClient(req.body)
        return res.status(201).json(client)
    }

    async listClients(req, res) {
        const clients = await ClientService.listClients(req.query)
        return res.status(200).json({ clients })
    }

    async findClientById(req, res) {
        const client = await ClientService.findClientById(req.params.id)
        return res.status(200).json({ client })
    }
    
    async removeClientById(req, res) {
        const client = await ClientService.removeClientById(req.params.id)
        return res.status(204).json({ client })
    }

    async updateClientById(req, res) {
        const client = await ClientService.updateClientById(req.params.id, req.body)
        return res.status(202).json({ client })
    }
}

module.exports = new ClientController()
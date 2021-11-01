const ClientRepository = require('../repository/ClientRepository')

class ClientService {
    async addClient(payloadBody) {
        try {
            const result = await ClientRepository.addClient(payloadBody)
            return result
        } catch (error) {
            return error
        }
    }

    async listClients(payloadQuery) {
        try {
            const result = await ClientRepository.listClients(payloadQuery)
            return result
        } catch (error) {
            return error
        }
    }

    async findClientById(payloadParam) {
        try {
            const result = await ClientRepository.findClientById(payloadParam)
            return result
        } catch (error) {
            return error
        }
    }

    async removeClientById(payloadParam) {
        try {
            const result = await ClientRepository.removeClientById(payloadParam)
            return result
        } catch (error) {
            return error
        }
    }

    async updateClientById(payloadParam, payloadBody) {
        try {
            const result = await ClientRepository.updateClientById(payloadParam, payloadBody)
            return result
        } catch (error) {
            return error
        }
    }
}

module.exports = new ClientService()
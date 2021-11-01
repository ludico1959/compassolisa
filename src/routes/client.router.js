const ClientController = require('../app/controller/ClientController')
const idValidation = require('../app/validation/client/idValidation')
const addClientValidation = require('../app/validation/client/addClientValidation')
const updateClientValidation = require('../app/validation/client/updateClientValidation')

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.post('/', addClientValidation, ClientController.addClient)
    routes.get('/', ClientController.listClients)
    routes.get('/:id', idValidation, ClientController.findClientById)
    routes.delete('/:id', idValidation, ClientController.removeClientById)
    routes.put('/:id', idValidation, updateClientValidation, ClientController.updateClientById)
    server.use(prefix, routes)
}
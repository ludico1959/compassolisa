const RentalController = require('../app/controller/RentalController')

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.get('/', RentalController.listOffices)
    routes.get('/:id', RentalController.listOfficeById)
    routes.put('/:id', RentalController.updateOfficeById)
    routes.delete('/:id', RentalController.deleteOfficeById)
    server.use(prefix, routes)
}
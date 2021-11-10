const RentalController = require('../app/controller/RentalController')
const addOfficeValidation = require('../app/validation/rental/addOfficeValidation')

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post('/', addOfficeValidation, RentalController.addOffice)
    routes.get('/', RentalController.listOffices)
    routes.get('/:id', RentalController.listOfficeById)
    routes.put('/:id', RentalController.updateOfficeById)
    routes.delete('/:id', RentalController.deleteOfficeById)
    server.use(prefix, routes)
}
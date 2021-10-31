const CarController = require('../app/controller/CarController')
const addCarValidation = require('../app/validation/car/addCarValidation')
const idValidation = require('../app/validation/car/idValidation')

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/', addCarValidation, CarController.addCar)
    routes.get('/', CarController.listCars)
    routes.delete('/:id', idValidation, CarController.removeCarById)
    server.use(prefix, routes)
}
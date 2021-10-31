const CarController = require('../app/controller/CarController')
const addCarValidation = require('../app/validation/car/addCarValidation')

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/', addCarValidation, CarController.addCar())
    server.use(prefix, routes)
}
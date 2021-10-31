module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/', CarsController.create)
}
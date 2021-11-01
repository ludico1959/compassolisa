const AuthController = require('../app/controller/AuthController')

module.exports = (server, routes, prefix = '/autheticate') => {
    routes.post('/', AuthController.authenticate)
    server.use(prefix, routes)
}
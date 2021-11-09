const { Router } = require('express')
const car = require('../routes/car.router')
const client = require('../routes/client.router')
const auth = require('../routes/auth.router')
// const rental = require('../routes/rental.router')

module.exports = server => {
    server.use((req, res, next) => {
        car(server, new Router())
        client(server, new Router())
        auth(server, new Router())
        // rental(server, new Router())
        next()
    })
}
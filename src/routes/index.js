const { Router } = require('express')
const car = require('../routes/car.router')
const client = require('../routes/client.router')

module.exports = server => {
    server.use((req, res, next) => {
        car(server, new Router())
        client(server, new Router())
        next()
    })
}
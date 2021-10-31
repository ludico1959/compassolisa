const express = require('express')
const router = require('./routes')
require('../infra/database/mongo')

class AppController {
    constructor() {
        this.server = express()
        this.middlewares
        this.routes
    }

    middlewares() {
        this.serve.use(express.json())
    }

    routes() {
        router(this.server)
    }
}

module.exports = new AppController().server
const express = require('express')

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
    
    }
}

module.exports = new AppController().express
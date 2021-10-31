const CarService = require('../service/CarService')

class CarController {
    async addCar(req, res) {
        const veiculos = await CarService.addCar(req.body)
        return res.status(201).json({ veiculos })
    }
}

module.exports = new CarController()
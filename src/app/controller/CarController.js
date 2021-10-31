const CarService = require('../service/CarService')

class CarController {
    async addCar(req, res) {
        const veiculo = await CarService.addCar(req.body)
        return res.status(201).json(veiculo)
    }
}

module.exports = new CarController()
const CarService = require('../service/CarService')

class CarController {
    async addCar(req, res) {
        const veiculo = await CarService.addCar(req.body)
        return res.status(201).json(veiculo)
    }

    async listCars(req, res) {
        const veiculos = await CarService.listCars(req.query)
        return res.status(200).json({ veiculos })
    }
    
    async removeCarById(req, res) {
        const veiculo = await CarService.removeCarById(req.params.id)
        return res.status(204).json({ veiculo })
    }

    async updateCarById(req, res) {
        const veiculo = await CarService.updateCarById(req.params.id, req.body)
        return res.status(202).json({ veiculo })
    }
}

module.exports = new CarController()
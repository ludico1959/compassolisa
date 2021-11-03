const { paginateSeriealize, serialize } = require('../seriealize/carSerialize')
const CarService = require('../service/CarService')

class CarController {
    async addCar(req, res) {
        const veiculo = await CarService.addCar(req.body)
        return res.status(201).json(serialize(veiculo))
    }

    async listCars(req, res) {
        const veiculos = await CarService.listCars(req.query)
        return res.status(200).json(paginateSeriealize(veiculos))
    }

    async findCarById(req, res) {
        const veiculo = await CarService.findCarById(req.params.id)
        return res.status(200).json(serialize(veiculo))
    }
    
    async removeCarById(req, res) {
        await CarService.removeCarById(req.params.id)
        return res.status(204).json({})
    }

    async updateCarById(req, res) {
        const veiculo = await CarService.updateCarById(req.params.id, req.body)
        return res.status(202).json(serialize(veiculo))
    }
}

module.exports = new CarController()
const { paginateSeriealize, serialize } = require('../seriealize/carSerialize')
const CarService = require('../service/CarService')

class CarController {
    async addCar(req, res) {
        try {
            const veiculo = await CarService.addCar(req.body)
            return  res.status(201).json(serialize(veiculo))
        } catch (error) {
            return (error)
        } 
    }

    async listCars(req, res) {
        try {
            const veiculos = await CarService.listCars(req.query)
            return res.status(200).json(paginateSeriealize(veiculos))
        } catch (error) {
            return (error)
        } 
    }

    async findCarById(req, res) {
        try{
            const veiculo = await CarService.findCarById(req.params.id)
            return res.status(200).json(serialize(veiculo))
        } catch (error) {
            return (error)
        } 
    }
    
    async removeCarById(req, res) {
        try{
            await CarService.removeCarById(req.params.id)
            return res.status(204).json({})
        } catch (error) {
            return (error)
        }
    }

    async updateCarById(req, res) {
        try{
            const veiculo = await CarService.updateCarById(req.params.id, req.body)
            return res.status(200).json(serialize(veiculo))
        } catch (error) {
            return (error)
        }
    }

    async updateCarAccessory(req, res) {
        try{
            const accessory = await CarService.updateCarAccessory(req.params, req.body)
            return res.status(200).json(serialize(accessory))
        } catch (error) {
            return (error)
        }
    }
}

module.exports = new CarController()
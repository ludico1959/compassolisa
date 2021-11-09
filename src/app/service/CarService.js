const CarRepository = require('../repository/CarRepository')

class CarService {
    async addCar(payloadBody) {
        const result = await CarRepository.addCar(payloadBody)
        return result
    }
    
    async listCars(payloadQuery) {
        const result = await CarRepository.listCars(payloadQuery)
        return result
    }

    async findCarById(payloadParam) {
        const result = await CarRepository.findCarById(payloadParam)
        return result
    }

    async removeCarById(payloadParam) {
        const result = await CarRepository.removeCarById(payloadParam)
        return result
    }

    async updateCarById(payloadParam, payloadBody) {
        const result = await findCarRepository.updateCarById(payloadParam, payloadBody)
        return result
    }

    async updateCarAccessory({id, accessoryId}, {descricao}) {
        const car = await CarRepository.findCarById(id)
        if (!car) throw new Error

        const result = await CarRepository.updateCarAccessory(accessoryId, descricao)

        return result
    }
}

module.exports = new CarService()
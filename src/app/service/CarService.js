const CarRepository = require('../repository/CarRepository')

class CarService {
    async addCar(payloadBody) {
        try {
            const result = await CarRepository.addCar(payloadBody)
            return result
        } catch (error) {
            return error
        }
    }
    
    async listCars(payloadQuery) {
        try {
            const result = await CarRepository.listCars(payloadQuery)
            return result
        } catch (error) {
            return error
        }
    }

    async findCarById(payloadParam) {
        try {
            const result = await CarRepository.findCarById(payloadParam)
            return result
        } catch (error) {
            return error
        }
    }

    async removeCarById(payloadParam) {
        try {
            const result = await CarRepository.removeCarById(payloadParam)
            return result
        } catch (error) {
            return error
        }
    }

    async updateCarById(payloadParam, payloadBody) {
        try {
            const result = await CarRepository.updateCarById(payloadParam, payloadBody)
            return result
        } catch (error) {
            return error
        }
    }
}

module.exports = new CarService()
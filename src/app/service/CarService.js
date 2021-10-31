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
}

module.exports = new CarService()
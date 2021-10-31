const CarSchema = require('../schema/CarSchema')

class CarRepository {
    async addCar(payloadBody) {
        return CarSchema.create(payloadBody)
    }

    async listCars(payloadQuery) {
        return CarSchema.paginate(payloadQuery, {
            page: payloadQuery.page || 1,
            limit: 2
        })
    }
}

module.exports = new CarRepository()
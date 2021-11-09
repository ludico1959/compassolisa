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

    async findCarById(payloadParam) {
        return CarSchema.findById(payloadParam)
    }

    async removeCarById(payloadParam) {
        return CarSchema.findByIdAndDelete(payloadParam)
    }

    async updateCarById(payloadParam, payloadBody) {
        return CarSchema.findByIdAndUpdate(payloadParam, payloadBody)
    }

    async updateCarAccessory(id, accessoryId, descricao) {
        await CarSchema.updateOne(
            { _id: id, "acessorios.id": accessoryId },
            {
                $set: { 
                    "acessorios.$.descricao": descricao
                }
            }
        )

        const car = await this.findCarById(id)
        const accessory = car.acessorios.filter(accessorio => accessorio.descricao === descricao)

        return accessory  
    }

    async removeAccessoryById(id, accessoryId, descricao) {
        await CarSchema.findOneAndUpdate(
            {},
            {
                $pull: { 
                    acessorios : {descricao: descricao}
                }
            },
            {
                multi: true
            }
        )

        const car = await this.findCarById(id)
        const accessory = car.acessorios.filter(accessorio => accessorio.descricao === descricao)

        return accessory 
    }
}

module.exports = new CarRepository()
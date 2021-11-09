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

        const accessoriesId = car.acessorios.filter(accessory => JSON.stringify(accessory._id) === JSON.stringify(accessoryId))
        // const accessoriesId = car.acessorios.forEach(accessory => {
        //     console.log(accessory._id)
        //     if (JSON.stringify(accessory._id) === JSON.stringify(accessoryId)) {
        //         console.log('Entrou')
        //     }
        // })
        if (accessoriesId.length === 0) 
            throw new Error 

        const accessoriesDescription = car.acessorios.filter(accessory => accessory.descricao === descricao)

        let acessoriesInFilter = 0
        for(let key in accessoriesDescription) {
            if(accessoriesDescription.hasOwnProperty(key)){
                acessoriesInFilter++
            }
        }

        if (acessoriesInFilter > 0) {
            console.log(accessoriesDescription)
            return await CarRepository.removeAccessoryById(id, accessoryId, descricao)
        }

        const result = await CarRepository.updateCarAccessory(id, accessoryId, descricao)

        return result
    }
}

module.exports = new CarService()
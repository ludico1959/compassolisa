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
            const result = await findCarRepository.updateCarById(payloadParam, payloadBody)
            return result
        } catch (error) {
            return error
        }
    }

    async updateCarAccessory({id, accessoryId}, {descricao}) {
        try {
            const car = await CarRepository.findCarById(id)
            if (!car) throw new Error

            const accessoriesId = car.acessorios.filter(accessory => accessory._id === accessoryId)
            if (accessoriesId.lenght === 0) 
                throw new Error 

            // const accessoriesDescription = car.acessorios.filter(accessory => accessory.descricao === descricao)

            // let acessoriesInFilter = 0
            // for(let key in accessoriesDescription) {
            //     if(accessoriesDescription.hasOwnProperty(key)){
            //         acessoriesInFilter++
            //     }
            // }

            // if (acessoriesInFilter > 0) {
            //     console.log(accessoriesDescription)
            //     return await CarRepository.removeAccessoryById(id, accessoryId, descricao)
            // }

            const result = await CarRepository.updateCarAccessory(id, accessoryId, descricao)

            return result
        } catch (error) {
            return error
        }
    }
}

module.exports = new CarService()
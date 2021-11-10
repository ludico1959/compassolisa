const RentalRepository = require('../repository/RentalRepository')

class RentalService {
    async listOffices(payloadQuery) {
        const result = await RentalRepository.listOffices(payloadQuery)
        return result
        
    }

    async listOfficeById(payloadQuery){
        const result = await RentalRepository.listOfficeById(payloadQuery)
        return result
        
    }

    async updateOfficeById(payloadQuery, payloadBody){
        const result = await RentalRepository.updateOfficeById(payloadQuery, payloadBody)
        return result
    }

    async deleteOfficeById(payloadQuery){
        const result = await RentalRepository.deleteOfficeById(payloadQuery)
        return result
    }
}

module.exports = new RentalService()

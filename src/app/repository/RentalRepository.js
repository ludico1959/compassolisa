const RentalSchema = require('../schema/RentalSchema')

class RentalRepository {
    async listOffices(payloadQuery){
        return RentalSchema.paginate(payloadQuery, {
            page: payload.page || 1,
            limit: 2
        })
    }

    async listOfficeById(payloadQuery){
        return RentalSchema.findById(payloadQuery)
    }

    async updateOfficeById(payloadQuery, payloadBody){
        return RentalSchema.findByIdAndUpdate(payloadQuery, payloadBody)
    }

    async deleteOfficeById(payloadQuery){
        return RentalSchema.findByIdAndDelete(payloadQuery);
    }
}

module.exports = new RentalRepository()
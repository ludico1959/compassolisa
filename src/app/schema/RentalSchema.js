const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const RentalSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    
    cnpj: {
        type: String,
        required: true,
        unique: true
    },

    atividades: {
        type: String,
        required: true
    },

    endereco: [{

        cep: {
            type: String,
            required: true
        },

        number: {
            type: String,
            required: true
        },

        isFilial: {
            type: Boolean,
            required: true
        },

        complemento: {
            type: String,
            required: false
        }
    }]
})

RentalSchema.plugin(mongoosePaginate);

const Rental = mongoose.model('Rental', RentalSchema)

module.exports = Rental

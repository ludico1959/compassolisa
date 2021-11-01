const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ClientSchema = new mongoose.Schema({
    nome: {
        type: String
    }, 
    
    cpf: {
        type: String
    },

    data_nascimento: {
        type: Date
    },

    email: {
        type: String
    },

    senha: {
        type: String
    },

    habilitado: {
        type: String,
        enum: ['sim', 'não']
    },


}) 

ClientSchema.plugin(mongoosePaginate)

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client
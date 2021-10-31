const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
    modelo: {
        type: String,
        required: true
    }, 
    
    cor: {
        type: String,
        required: true
    },

    ano: {
        type: Number,
        required: true
    },

    acessorios: [{
        descricao: {
            type: String,
            required: true
        }
    }],

    quantidadePassageiros: {
        type: Number,
        required: true
    }
}) 

const Car = mongoose.model('Car', CarSchema)

module.exports = Car
const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
    modelo: {
        type: String
    }, 
    
    cor: {
        type: String
    },

    ano: {
        type: Number
    },

    acessorios: [{
        descricao: {
            type: String
        }
    }],

    quantidadePassageiros: {
        type: Number
    }
}) 

const Car = mongoose.model('Car', CarSchema)

module.exports = Car
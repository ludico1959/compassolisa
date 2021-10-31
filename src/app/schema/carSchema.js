const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
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
        require: true
    }
}) 

const Car = mongoose.model('Car', CarsSchema)

module.exports = Car
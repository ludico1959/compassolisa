const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const bcrypt = require('bcryptjs')

const ClientSchema = new mongoose.Schema({
    nome: {
        type: String
    }, 
    
    cpf: {
        type: String,
        unique: true
    },

    data_nascimento: {
        type: Date
    },

    email: {
        type: String,
        unique: true
    },

    senha: {
        type: String
    },

    habilitado: {
        type: String,
        enum: ['sim', 'não']
    },


}) 

ClientSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash

    next()
})

ClientSchema.plugin(mongoosePaginate)

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client
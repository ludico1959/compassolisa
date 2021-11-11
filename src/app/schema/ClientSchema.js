const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require('bcryptjs');

const ClientSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },

  cpf: {
    type: String,
    unique: true,
    required: true
  },

  data_nascimento: {
    type: Date,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  senha: {
    type: String,
    required: true
  },

  habilitado: {
    type: String,
    enum: ['sim', 'não']
  }
});

ClientSchema.pre('save', async function encrypted(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

ClientSchema.plugin(mongoosePaginate);

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;

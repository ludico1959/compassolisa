const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarSchema = new mongoose.Schema({
  modelo: {
    type: String
  },

  cor: {
    type: String
  },

  ano: {
    type: Number
  },

  acessorios: [
    {
      descricao: {
        type: String
      }
    }
  ],

  quantidadePassageiros: {
    type: Number
  }
});

CarSchema.plugin(mongoosePaginate);

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;

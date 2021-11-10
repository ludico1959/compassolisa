const CarSchema = require('../schema/CarSchema');

class CarRepository {
  async addCar(payloadBody) {
    return CarSchema.create(payloadBody);
  }

  async listCars(payloadQuery) {
    return CarSchema.paginate(payloadQuery, {
      page: payloadQuery.page || 1,
      limit: 2
    });
  }

  async findCarById(payloadParam) {
    return CarSchema.findById(payloadParam);
  }

  async removeCarById(payloadParam) {
    return CarSchema.findByIdAndDelete(payloadParam);
  }

  async updateCarById(payloadParam, payloadBody) {
    return CarSchema.findByIdAndUpdate(payloadParam, payloadBody);
  }

  async updateCarAccessory(accessoryId, descricao) {
    const result = await CarSchema.findOneAndUpdate(
      { 'acessorios._id': accessoryId },
      {
        $set: {
          'acessorios.$.descricao': descricao
        }
      },
      { new: true, safe: true, upsert: true }
    );

    return result;
  }
}

module.exports = new CarRepository();

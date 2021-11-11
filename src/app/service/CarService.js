const CarRepository = require('../repository/CarRepository');
const CarIdNotFound = require('../errors/car/CarIdNotFound');
const AcessoryIdNotFound = require('../errors/car/AccessoryIdNotFound');

class CarService {
  async addCar(payloadBody) {
    const result = await CarRepository.addCar(payloadBody);
    return result;
  }

  async listCars(payloadQuery) {
    const result = await CarRepository.listCars(payloadQuery);
    return result;
  }

  async findCarById(payloadParam) {
    const result = await CarRepository.findCarById(payloadParam);
    if (!result) throw new CarIdNotFound(payloadParam);
    return result;
  }

  async removeCarById(payloadParam) {
    const result = await CarRepository.removeCarById(payloadParam);
    if (!result) throw new CarIdNotFound(payloadParam);
    return result;
  }

  async updateCarById(payloadParam, payloadBody) {
    const result = await CarRepository.updateCarById(payloadParam, payloadBody);
    if (!result) throw new CarIdNotFound(payloadParam);
    return result;
  }

  async updateCarAccessory({ idCar, idDescription }, { descricao }) {
    const carResult = await CarRepository.findCarById(idCar);
    if (!carResult) throw new CarIdNotFound(idCar);

    const accessoryResult = await CarRepository.updateCarAccessory(idDescription, descricao);
    if (!accessoryResult) throw new AcessoryIdNotFound(idDescription);

    return accessoryResult;
  }
}

module.exports = new CarService();

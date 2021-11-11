const CarRepository = require('../repository/CarRepository');
const CarNotFound = require('../errors/car/CarNotFound');
const AcessoryNotFound = require('../errors/car/AccessoryNotFound');

class CarService {
  async addCar(payloadBody) {
    const result = await CarRepository.addCar(payloadBody);
    if (!result) throw new CarNotFound();
    return result;
  }

  async listCars(payloadQuery) {
    const result = await CarRepository.listCars(payloadQuery);
    if (!result) throw new CarNotFound();
    return result;
  }

  async findCarById(payloadParam) {
    const result = await CarRepository.findCarById(payloadParam);
    if (!result) throw new CarNotFound(payloadParam);
    return result;
  }

  async removeCarById(payloadParam) {
    const result = await CarRepository.removeCarById(payloadParam);
    if (!result) throw new CarNotFound(payloadParam);
    return result;
  }

  async updateCarById(payloadParam, payloadBody) {
    const result = await CarRepository.updateCarById(payloadParam, payloadBody);
    if (!result) throw new CarNotFound(payloadParam);
    return result;
  }

  async updateCarAccessory({ idCar, idDescription }, { descricao }) {
    const carResult = await CarRepository.findCarById(idCar);
    if (!carResult) throw new CarNotFound(idCar);

    const accessoryResult = await CarRepository.updateCarAccessory(idDescription, descricao);
    if (!accessoryResult) throw new AcessoryNotFound(idDescription);

    return accessoryResult;
  }
}

module.exports = new CarService();

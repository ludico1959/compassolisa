const { paginateSeriealize, serialize } = require('../seriealize/carSerialize');
const CarService = require('../service/CarService');

class CarController {
  async addCar(req, res) {
    try {
      const vehicle = await CarService.addCar(req.body);
      return res.status(201).json(serialize(vehicle));
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async listCars(req, res) {
    try {
      const vehicles = await CarService.listCars(req.query);
      return res.status(200).json(paginateSeriealize(vehicles));
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async findCarById(req, res) {
    try {
      const vehicle = await CarService.findCarById(req.params.id);
      return res.status(200).json(serialize(vehicle));
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async removeCarById(req, res) {
    try {
      await CarService.removeCarById(req.params.id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async updateCarById(req, res) {
    try {
      const vehicle = await CarService.updateCarById(req.params.id, req.body);
      return res.status(200).json(serialize(vehicle));
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }

  async updateCarAccessory(req, res) {
    try {
      const description = await CarService.updateCarAccessory(req.params, req.body);
      return res.status(200).json(serialize(description));
    } catch (error) {
      return res.status(400).json({ description: error.path, name: error.message });
    }
  }
}

module.exports = new CarController();

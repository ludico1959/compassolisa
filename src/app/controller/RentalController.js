const { paginateSerialize, serialize } = require('../seriealize/rentalSerialize');
const RentalService = require('../service/RentalService');

class RentalController {
  async addOffice(req, res) {
    try {
      const result = await RentalService.addOffice(req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return error;
    }
  }

  async listOffices(req, res) {
    try {
      const result = await RentalService.listOffices(req.query);
      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return error;
    }
  }

  async listOfficeById(req, res) {
    try {
      const result = await RentalService.listOfficeById(req.params.id);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return error;
    }
  }

  async updateOfficeById(req, res) {
    try {
      const result = await RentalService.updateOfficeById(req.params.id, req.body);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return error;
    }
  }

  async deleteOfficeById(req, res) {
    try {
      const result = await RentalService.deleteOfficeById(req.params.id);
      return res.status(202).json(serialize(result));
    } catch (error) {
      return error;
    }
  }
}

module.exports = new RentalController();

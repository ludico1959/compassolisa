const { paginateSerialize, serialize } = require('../seriealize/RentalSerialize');
const RentalService = require('../service/RentalService');

class RentalController {
  async addOffice(req, res) {
    try {
      const result = await RentalService.addOffice(req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(error.statusCode).json({ description: error.description, name: error.message });
    }
  }

  async listOffices(req, res) {
    try {
      const result = await RentalService.listOffices(req.query);
      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return res.status(error.statusCode).json({ description: error.description, name: error.message });
    }
  }

  async listOfficeById(req, res) {
    try {
      const result = await RentalService.listOfficeById(req.params.id);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(error.statusCode).json({ description: error.description, name: error.message });
    }
  }

  async updateOfficeById(req, res) {
    try {
      const result = await RentalService.updateOfficeById(req.params.id, req.body);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(error.statusCode).json({ description: error.description, name: error.message });
    }
  }

  async removeOfficeById(req, res) {
    try {
      await RentalService.removeOfficeById(req.params.id);
      return res.status(202).json({});
    } catch (error) {
      return res.status(error.statusCode).json({ description: error.description, name: error.message });
    }
  }
}

module.exports = new RentalController();

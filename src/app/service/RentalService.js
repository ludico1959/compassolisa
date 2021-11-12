const RentalRepository = require('../repository/RentalRepository');
const RentalIdNotFound = require('../errors/rental/RentalIdNotFound');
const CnpjUtils = require('../utils/CnpjUtils');
const DuplicateDataUtils = require('../utils/DuplicateDataUtils');

class RentalService {
  async addOffice(payloadBody) {
    await CnpjUtils.testCnpj(payloadBody.cnpj);
    await DuplicateDataUtils.duplicatedCpj(payloadBody.cnpj);
    await DuplicateDataUtils.duplicatedHeadquarter(payloadBody.endereco);

    const result = await RentalRepository.addOffice(payloadBody);
    return result;
  }

  async listOffices(payloadParam) {
    const result = await RentalRepository.listOffices(payloadParam);
    return result;
  }

  async listOfficeById(payloadParam) {
    const result = await RentalRepository.listOfficeById(payloadParam);
    if (!result) throw new RentalIdNotFound(payloadParam);
    return result;
  }

  async updateOfficeById(payloadParam, payloadBody) {
    if (payloadBody.cnpj) {
      await CnpjUtils.testCnpj(payloadBody.cnpj);
      await DuplicateDataUtils.duplicatedCpj(payloadBody.cnpj);
    }

    if (payloadBody.endereco) {
      await DuplicateDataUtils.duplicatedHeadquarter(payloadBody.endereco);
    }

    const result = await RentalRepository.updateOfficeById(payloadParam, payloadBody);
    if (!result) throw new RentalIdNotFound(payloadParam);
    return result;
  }

  async removeOfficeById(payloadParam) {
    const result = await RentalRepository.removeOfficeById(payloadParam);
    if (!result) throw new RentalIdNotFound(payloadParam);
    return result;
  }
}

module.exports = new RentalService();

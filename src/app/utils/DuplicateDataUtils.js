const DuplicatedCpf = require('../errors/client/DuplicatedCpf');
const DuplicatedEmail = require('../errors/client/DuplicatedEmail');
const DuplicatedHeadquarter = require('../errors/rental/DuplicatedHeadquarter');
const ClientSchema = require('../schema/ClientSchema');

class DuplicateDataUtils {
  async duplicatedCpf(cpf) {
    const cpfSeach = await ClientSchema.find({ cpf });

    if (cpfSeach.length > 0) throw new DuplicatedCpf();
  }

  async duplicatedEmail(email) {
    const emailSeach = await ClientSchema.find({ email });

    if (emailSeach.length > 0) throw new DuplicatedEmail();
  }

  async duplicatedHeadquarter(address) {
    let headquartersCounter = 0;
    address.forEach((local) => {
      if (!local.isFilial) {
        headquartersCounter += 1;
      }
      if (headquartersCounter > 1) {
        throw new DuplicatedHeadquarter();
      }
    });
  }
}

module.exports = new DuplicateDataUtils();

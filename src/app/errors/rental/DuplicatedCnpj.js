class DuplicatedCnpj extends Error {
  constructor(cnpj) {
    super();
    this.statusCode = 409;
    this.description = 'Conflit';
    this.message = `CNPJ ${cnpj} already in use`;
  }
}

module.exports = DuplicatedCnpj;

class InvalidCnpj extends Error {
  constructor(cnpj) {
    super();
    this.statusCode = 400;
    this.description = 'Bad Request';
    this.message = `Invalid CNPJ ${cnpj}`;
  }
}

module.exports = InvalidCnpj;

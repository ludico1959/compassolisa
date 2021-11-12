class InvalidCnpj extends Error {
  constructor(cnpj) {
    super();
    this.statusCode = 400;
    this.description = 'Bad Request';
    this.message = `Invalid CPF ${cnpj}`;
  }
}

module.exports = InvalidCnpj;

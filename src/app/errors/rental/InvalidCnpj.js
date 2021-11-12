class InvalidCnpj extends Error {
  constructor(cnpj) {
    super();
    this.description = 'Bad Request';
    this.message = `Invalid CPF ${cnpj}`;
  }
}

module.exports = InvalidCnpj;

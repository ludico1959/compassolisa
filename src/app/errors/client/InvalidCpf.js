class InvalidCpf extends Error {
  constructor(cpf) {
    super();
    this.description = 'Bad Request';
    this.message = `Invalid CPF ${cpf}`;
  }
}

module.exports = InvalidCpf;

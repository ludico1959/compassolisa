class DuplicatedCpf extends Error {
  constructor(cpf) {
    super();
    this.statusCode = 409;
    this.description = 'Conflit';
    this.message = `CPF ${cpf} already in use`;
  }
}

module.exports = DuplicatedCpf;

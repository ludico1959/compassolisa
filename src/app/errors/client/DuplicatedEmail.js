class DuplicatedEmail extends Error {
  constructor(email) {
    super();
    this.statusCode = 409;
    this.description = 'Conflit';
    this.message = `Email ${email} already in use`;
  }
}

module.exports = DuplicatedEmail;

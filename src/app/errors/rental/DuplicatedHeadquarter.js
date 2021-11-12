class DuplicatedHeadquarter extends Error {
  constructor() {
    super();
    this.statusCode = 409;
    this.description = 'Conflict';
    this.message = `There are already a headquarter`;
  }
}
module.exports = DuplicatedHeadquarter;

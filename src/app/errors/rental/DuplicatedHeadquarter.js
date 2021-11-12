class DuplicatedHeadquarter extends Error {
  constructor() {
    super();
    this.description = 'Conflict';
    this.message = `There are already a headquarter`;
  }
}
module.exports = DuplicatedHeadquarter;

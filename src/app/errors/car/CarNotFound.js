class CarNotFound extends Error {
  constructor(id) {
    super();
    this.message = `The following car's ID: ${id}' was not found`;
  }
}

module.exports = CarNotFound;

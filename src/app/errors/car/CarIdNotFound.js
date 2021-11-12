class CarIdNotFound extends Error {
  constructor(id) {
    super();
    this.description = 'Not found';
    this.message = `The car ID: ${id} was not found`;
  }
}
module.exports = CarIdNotFound;

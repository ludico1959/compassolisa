class CarIdNotFound extends Error {
  constructor(id) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The car ID: ${id} was not found`;
  }
}
module.exports = CarIdNotFound;

class RentalIdNotFound extends Error {
  constructor(id) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The Office ID: ${id} was not found`;
  }
}
module.exports = RentalIdNotFound;

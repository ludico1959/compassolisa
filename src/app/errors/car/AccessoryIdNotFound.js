class AccessoryIdNotFound extends Error {
  constructor(id) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The accessory (description) ID: ${id} was not found`;
  }
}
module.exports = AccessoryIdNotFound;

class ClientIdNotFound extends Error {
  constructor(id) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The client ID: ${id} was not found`;
  }
}
module.exports = ClientIdNotFound;

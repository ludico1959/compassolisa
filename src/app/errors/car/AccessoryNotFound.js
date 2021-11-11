class AccessoryNotFound extends Error {
  constructor(id) {
    super();
    this.message = `The following car's ID: ${id}' was not found`;
  }
}

module.exports = AccessoryNotFound;

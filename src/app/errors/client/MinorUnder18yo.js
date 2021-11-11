class MinorUnder18yo extends Error {
  constructor(name, age) {
    super();
    this.statusCode = 406;
    this.description = 'Minor';
    this.message = `${name} is ${age} years old and is not allowed to drive according to the current law`;
  }
}
module.exports = MinorUnder18yo;

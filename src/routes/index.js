const { Router } = require('express');
const car = require('./car.router');
const client = require('./client.router');
const auth = require('./auth.router');
const rental = require('./rental.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    car(server, new Router());
    client(server, new Router());
    auth(server, new Router());
    rental(server, new Router());
    next();
  });
};

const CarController = require('../app/controller/CarController');
const idValidation = require('../app/validation/idValidation');
const addCarValidation = require('../app/validation/car/addCarValidation');
const updateCarValidation = require('../app/validation/car/updateCarValidation');
const bearerAuthentication = require('../app/middleware/BearerAuthentication');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', bearerAuthentication, addCarValidation, CarController.addCar);
  routes.get('/', bearerAuthentication, CarController.listCars);
  routes.get('/:id', bearerAuthentication, idValidation, CarController.findCarById);
  routes.delete('/:id', bearerAuthentication, idValidation, CarController.removeCarById);
  routes.put('/:id', bearerAuthentication, idValidation, updateCarValidation, CarController.updateCarById);
  routes.patch('/:idCar/acessorios/:idDescription', bearerAuthentication, CarController.updateCarAccessory);
  server.use(prefix, routes);
};

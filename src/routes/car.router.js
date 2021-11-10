const CarController = require('../app/controller/CarController');
const idValidation = require('../app/validation/car/idValidation');
const addCarValidation = require('../app/validation/car/addCarValidation');
const updateCarValidation = require('../app/validation/car/updateCarValidation');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', addCarValidation, CarController.addCar);
  routes.get('/', CarController.listCars);
  routes.get('/:id', idValidation, CarController.findCarById);
  routes.delete('/:id', idValidation, CarController.removeCarById);
  routes.put('/:id', idValidation, updateCarValidation, CarController.updateCarById);
  routes.patch('/:idCar/acessorios/:idDescription', CarController.updateCarAccessory);
  server.use(prefix, routes);
};

const RentalController = require('../app/controller/RentalController');
const addOfficeValidation = require('../app/validation/rental/addOfficeValidation');
const updateOfficeValidation = require('../app/validation/rental/updateOfficeValidation');
const idValidation = require('../app/validation/rental/idValidation');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', addOfficeValidation, RentalController.addOffice);
  routes.get('/', RentalController.listOffices);
  routes.get('/:id', idValidation, RentalController.listOfficeById);
  routes.put('/:id', idValidation, updateOfficeValidation, RentalController.updateOfficeById);
  routes.delete('/:id', idValidation, RentalController.deleteOfficeById);
  server.use(prefix, routes);
};

const CarService = require('../service/CarsService')

class CarController {
    async addCar(req, res) {
        const result = await CarService.addCar(req.body)
        return res.status(201).json({ result })
    }
}
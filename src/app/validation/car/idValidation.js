const CarRepository = require('../../repository/CarRepository')

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const car = await CarRepository.findCarById(id)

        if (car) {
            req.car = car
            next()
        } else {
            res.status(404).json({ message: 'Car ID not found.'})
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}
const Joi = require('joi')
const RentalRepository = require('../../repository/RentalRepository')

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            id: Joi.string()
                .min(24)
                .max(24)
                .pattern(/^[0-9a-fA-F]{24}$/)
                .required()
        })

        const { error } = await schema.validate(req.params, { abortEarly: false })
        
        if(error) throw error

        const { id } = req.params
        
        const office = await RentalRepository.findOfficeById(id)

        if (office) {
            req.office = office
            next()
        } else {
            res.status(404).json({ message: 'Office ID not found.'})
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}
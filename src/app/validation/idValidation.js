const Joi = require('joi')

module.exports = async(req, res, next) => {
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

        return next()
    } catch(error) {
        return res.status(400).json({message: error.message})
    }
}
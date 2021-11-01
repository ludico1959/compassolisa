const Joi = require('joi')

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            modelo: Joi.string(),

            cor: Joi.string(),
            
            ano: Joi.number()
                .less(2023)
                .greater(1949),
            
            acessorios: Joi.array()
                .items({
                    descricao: Joi.string()
                        .required()
                })
                .unique()
                .min(1),

            quantidadePassageiros: Joi.number(),
        })

        const { error } = await schema.validate(req.body, { abortEarly: false })

        if (error) throw error

        return next()
    } catch (error){
        return res.status(400).json(error)
    }
}
const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().min(3).replace(' ', ''),

      cnpj: Joi.string()
        .min(14)
        .max(18)
        .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/),

      atividades: Joi.string().trim().min(3),

      endereco: Joi.array()
        .min(1)
        .unique()
        .items({
          cep: Joi.string()
            .regex(/[0-9]{5}-[0-9]{3}$/)
            .required(),

          number: Joi.string().required(),

          isFilial: Joi.boolean().required(),

          complemento: Joi.string().min(3)
        })
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

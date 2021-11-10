const Joi = require('joi').extend(require('@joi/date'));

const now = Date.now();
const cutoffDate = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18);

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),

      cpf: Joi.string()
        .min(14)
        .max(14)
        .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
        .required(),

      data_nascimento: Joi.date()
        .max(cutoffDate)
        .format('DD/MM/YYYY')
        .required(),

      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .lowercase()
        .required(),

      senha: Joi.string().min(6).required(),

      habilitado: Joi.string().valid('sim', 'não').required()
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

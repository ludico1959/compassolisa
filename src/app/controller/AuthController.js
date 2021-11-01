const ClientSchema = require('../schema/ClientSchema')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

class AuthController {
    async authenticate(req, res) {
        const { email, senha } = await (req.body)

        const client = await ClientSchema.findOne({ email })
        const habilitado = client.habilitado

        if (!client)
            return res.status(400).send({ error: 'Client not found.'})

        if (senha != client.senha)
            return res.status(400).send({ error: 'Invalid password.'})

        client.senha = undefined

        const token = jwt.sign({ id: client.id }, authConfig.secret, {
            expiresIn: 86400,
        })

        return res.status(201).json({ email, habilitado, token });
    }

}

module.exports = new AuthController()
const ClientSchema = require('../schema/ClientSchema')

class AuthController {
    async authenticate(req, res) {
        const { email, senha } = await (req.body)

        const client = await ClientSchema.findOne({ email })

        if (!client)
            return res.status(400).send({ error: 'Client not found.'})
        
        console.log(typeof senha, senha)
        console.log(typeof client.senha, client.senha)
        if (senha != client.senha)
            return res.status(400).send({ error: 'Invalid password.'})

            client.senha = undefined
        return res.send({ client })
    }

}

module.exports = new AuthController()
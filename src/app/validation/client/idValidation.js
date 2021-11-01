const ClientRepository = require('../../repository/ClientRepository')

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params

        const client = await clientRepository.findClientById(id)

        if (client) {
            req.client = client
            next()
        } else {
            res.status(404).json({ message: 'Client ID not found.'})
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}
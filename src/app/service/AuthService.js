const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const ClientRepository = require('../repository/ClientRepository');

class AuthService {
  async authenticate(email, senha) {
    const client = await ClientRepository.findClientByEmail(email);
    const { habilitado } = client;

    if (!client) throw Error('Client not found.');

    if (senha !== client.senha) throw Error('Invalid password.');

    client.senha = undefined;

    const token = jwt.sign({ id: client.id }, authConfig.secret, {
      expiresIn: 86400
    });

    return { email, habilitado, token };
  }
}

module.exports = new AuthService();

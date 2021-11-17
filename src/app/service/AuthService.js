const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth.json');
const ClientRepository = require('../repository/ClientRepository');

class AuthService {
  async authenticate(email, senha) {
    const client = await ClientRepository.findClientByEmail(email);

    if (!client) throw Error('Client not found.');

    const { habilitado } = client;

    const checkPassword = await bcrypt.compare(senha, client.senha);

    if (!checkPassword) throw Error('Invalid password.');

    client.senha = undefined;

    const token = jwt.sign({ id: client.id }, authConfig.secret, {
      expiresIn: 86400
    });

    return { email, habilitado, token };
  }
}

module.exports = new AuthService();

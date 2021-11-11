const AuthService = require('../service/AuthService');

class AuthController {
  async authenticate(req, res) {
    try {
      const { email, senha } = await req.body;
      const result = await AuthService.authenticate(email, senha);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();

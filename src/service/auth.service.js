const connections = require("../app/database");
class AuthService {
  async getUserById(id, password) {
    const statement = `SELECT * FROM user WHERE id=? AND password=?`;
    const [result] = await connections.execute(statement, [id, password]);
    return result;
  }
}

module.exports = new AuthService();

const connections = require("../app/database");

class FileService {
  async saveAvatar(filename, mimetype, size, userId) {
    const statement = `INSERT INTO avatar (filename,mimeType,size,user_id) VALUES(?,?,?,?)`;
    const result = await connections.execute(statement, [
      filename,
      mimetype,
      size,
      userId,
    ]);

    return result[0];
  }
  async getAvatarById(userId) {
    const statement = `select * from avatar where user_id=?`;
    const [result] = await connections.execute(statement, [userId]);
    if (result.length === 0) {
      return result[0];
    } else {
      return result[result.length - 1];
    }
  }
}

module.exports = new FileService();

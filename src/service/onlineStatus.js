const connections = require("../app/database");

class onlineStatus {
  async change(id, Status) {
    if (!id) {
      return "Status为空";
    }
    const statement = `UPDATE  user SET online=? WHERE id=?`;
    const result = await connections.execute(statement, [Status, id]);
    return result[0];
  }
}

module.exports = new onlineStatus();

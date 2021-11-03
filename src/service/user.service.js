const connections = require("../app/database");

class UserService {
  async create(username, password, sex) {
    const statement = `INSERT INTO user (name,password,sex) VALUES (?,?,?)`;
    const [result] = await connections.execute(statement, [username, password, sex]);
    return result;
  }
  async getUserList(userId) {
    const statement = `SELECT u.id,u.name,u.avatar_url avatarUrl,u.online,u.sex,u.level 
                        FROM friend f LEFT JOIN user u ON u.id=f.friend_id WHERE user_id=?
                      UNION ALL
                      SELECT  u.id,u.name,u.avatar_url avatarUrl,u.online,u.sex,u.level 
                        FROM friend f LEFT JOIN user u ON u.id=f.user_id WHERE friend_id=?`;
    const [result] = await connections.execute(statement, [userId, userId]);

    return result;
  }
  async getUserInfoById(userId) {
    const statement = `SELECT 
    u.id id,u.name name,u.online online, u.level level, u.avatar_url avatarUrl, u.sex sex, b.intro intro, b.city city, b.age age
   FROM user u LEFT JOIN baseinfo b ON u.id=b.user_id WHERE u.id=?`;
    const [result] = await connections.execute(statement, [userId]);
    return result;
  }
  async getUserListInfoByNmae(name) {
    const statement = `SELECT 
    u.id id,u.name name,u.online online, u.level level, u.avatar_url avatarUrl, u.sex sex, b.intro intro, b.city city, b.age age, b.tel tel, b.e_mail eMail
   FROM user u LEFT JOIN baseinfo b ON u.id=b.user_id WHERE u.name=?`;
    const [result] = await connections.execute(statement, [name]);
    return result;
  }
  async updateAvatarurlById(avatarUrl, userId) {
    const statement = `update user set avatar_url=? where id =?`;
    const result = await connections.execute(statement, [avatarUrl, userId]);
    return result[0];
  }
  //添加好友关系
  async addFriend(id1, id2) {
    //向数据库插入数据时总是让id小的在前面
    if (id1 > id2) {
      let t = id1;
      id1 = id2;
      id2 = t;
    }
    const statement = `INSERT INTO friend (user_id,friend_id) VALUES(?,?)`;
    try {
      const [result] = await connections.execute(statement, [id1, id2]);
      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  async isFriend(id1, id2) {
    if (id1 > id2) {
      let t = id1;
      id1 = id2;
      id2 = t;
    }
    const statement = `SELECT *  FROM friend WHERE user_id=? AND friend_id=?`;
    const [result] = await connections.execute(statement, [id1, id2]);
    return result.length === 0 ? false : true;
  }
  //查询baseinfo表是否有信息
  async isExistBaseInfoById(id) {
    const statement = `SELECT * FROM baseinfo WHERE user_id=?`;
    const [result] = await connections.execute(statement, [id]);
    return result.length === 0 ? false : true;
  }
  //修改baseinfo
  async updateUserBaseInfo(sex, username, id, age, city, intro) {
    sex = this.undefined2null(sex);
    username = this.undefined2null(username);
    age = this.undefined2null(age);
    city = this.undefined2null(city);
    intro = this.undefined2null(intro);
    const statement = ` UPDATE  baseinfo 
                        SET age=?,city=?,intro=?
                        WHERE user_id=?`;
    const statement2 = `UPDATE user SET sex=?,name=? WHERE id=?`;
    await connections.execute(statement, [age, city, intro, id]);
    await connections.execute(statement2, [sex, username, id]);
  }
  //新增baseinfo
  async insertUserBaseInfo(sex, username, id, age, city, intro) {
    sex = this.undefined2null(sex);
    username = this.undefined2null(username);
    age = this.undefined2null(age);
    city = this.undefined2null(city);
    intro = this.undefined2null(intro);
    const statement = ` INSERT INTO baseinfo(user_id,age,city,intro) VALUES(?,?,?,?)`;
    const statement2 = `UPDATE user SET sex=?,name=? WHERE id=?`;
    await connections.execute(statement, [id, age, city, intro]);
    await connections.execute(statement2, [sex, username, id]);
  }
  async updatePassword(password, id) {
    const statement = `UPDATE user SET password=? WHERE id=?`;
    const [result] = await connections.execute(statement, [password, id]);
    return result;
  }
  undefined2null(arg) {
    if (!arg) {
      return null;
    }
    return arg;
  }
}
module.exports = new UserService();

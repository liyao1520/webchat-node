const mysql = require("mysql2/promise"); //获取mysql 执行函数为promise
const config = require("./config");
const connections = mysql.createPool({
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  database: config.DATABASE_NAME,
  user: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
});
connections
  .getConnection()
  .then((conn) => {
    conn
      .connect()
      .then(() => {
        console.log("mysql 连接成功!");
      })
      .catch((err) => {
        console.log("mysql连接失败!");
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = connections;

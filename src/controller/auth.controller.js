const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config");
class AuthController {
  async login(ctx, next) {
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24 * 30, //30天
      algorithm: "RS256",
    });
    ctx.user.token = token;
    ctx.body = {
      data: ctx.user,
      status: 200,
    };
  }
  async success(ctx, next) {
    ctx.body = "授权成功!";
  }
}

module.exports = new AuthController();

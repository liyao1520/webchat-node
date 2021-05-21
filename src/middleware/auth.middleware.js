const checkParams = require("../utils/checkParams");
const authService = require("../service/auth.service");
const errorTypes = require("../constants/error-types");
const jwt = require("jsonwebtoken");
const { md5Password } = require("../utils/password-handle");
const { PUBLIC_KEY } = require("../app/config");
class AuthMiddleware {
  async verifyLogin(ctx, next) {
    //获取id和password
    let { id, password } = ctx.request.body;
    const err = checkParams(id, password);
    if (err) {
      return ctx.app.emit("err", err, ctx);
    }
    //从数据库查询账号密码是否正确
    password = md5Password(password);
    const result = await authService.getUserById(parseInt(id), password);
    if (result[0]) {
      const { id, name, online, level, avatar_url } = result[0];
      ctx.user = {
        id,
        name,
        online,
        level,
        avatar_url,
      };
    } else {
      const error = new Error(errorTypes.PASSWORD_IS_INCORRECT);
      return ctx.app.emit("err", error, ctx);
    }
    await next();
  }
  async verifyAuth(ctx, next) {
    console.log("验证授权~");
    const authorization = ctx.headers.authorization;
    if (!authorization) {
      const error = new Error(errorTypes.UNAUTHORIZATION);
      return ctx.app.emit("err", error, ctx);
    }
    const token = authorization.replace("Bearer ", "");
    try {
      const result = jwt.verify(token, PUBLIC_KEY, {
        algorithms: ["RS256"],
      });
      ctx.user = result;
    } catch (err) {
      const error = new Error(errorTypes.UNAUTHORIZATION);
      return ctx.app.emit("err", error, ctx);
    }
    await next();
  }
}

module.exports = new AuthMiddleware();

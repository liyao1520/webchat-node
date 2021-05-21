const checkParams = require("../utils/checkParams");
const { md5Password } = require("../utils/password-handle");
const errorTypes = require("../constants/error-types");
const authService = require("../service/auth.service");
class UserMiddleware {
  async CheckParams(ctx, next) {
    //获取用户名和密码
    const { username, password, sex } = ctx.request.body;
    const err = checkParams(username, password, sex);
    if (
      err ||
      username.length < 1 ||
      username.length > 10 ||
      password.length < 8 ||
      password.length > 16 ||
      !["男", "女"].includes(sex)
    ) {
      return ctx.app.emit("err", new Error(errorTypes.PARAMS_ERROR), ctx);
    }
    await next();
  }
  //密码加密
  async handlePassword(ctx, next) {
    let { password, newPassword } = ctx.request.body; //获取密码
    if (!password) {
      password = "";
    }
    ctx.request.body.password = md5Password(password);
    if (newPassword) {
      ctx.request.body.newPassword = md5Password(newPassword);
    }

    await next();
  }
  async verifyPassword(ctx, next) {
    if (!ctx.request.body.password || !ctx.user.id) {
      return (ctx.body = {
        status: "404",
        msg: "参数错误!",
      });
    }
    const user = await authService.getUserById(
      ctx.user.id,
      ctx.request.body.password
    );
    if (user.length != 0) {
      await next();
    } else {
      return (ctx.body = {
        status: 401,
        msg: "密码错误!",
      });
    }
  }
}

module.exports = new UserMiddleware();

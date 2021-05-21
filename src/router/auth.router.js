const Router = require("koa-router");
const authRouter = new Router();
const { login, success } = require("../controller/auth.controller");
const { verifyLogin, verifyAuth } = require("../middleware/auth.middleware");
//注册账号
//CheckParams:检查参数是否有误,md5password
authRouter.post("/login", verifyLogin, login);
authRouter.get("/test", verifyAuth, success);
module.exports = authRouter;

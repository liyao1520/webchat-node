const Router = require("koa-router");
const {
  create,
  getUserList,
  getUserInfo,
  getMyInfo,
  addFriend,
  searchUser,
  updateUserInfo,
  updatePassword,
} = require("../controller/user.controller");
const {
  CheckParams,
  handlePassword,
  verifyPassword,
} = require("../middleware/user.middleware");
const { verifyAuth } = require("../middleware/auth.middleware");
const userRouter = new Router({
  prefix: "/user",
});

//注册账号
//CheckParams:检查参数是否有误,md5password
userRouter.post("/", CheckParams, handlePassword, create);
userRouter.patch(
  "/password",
  verifyAuth,
  handlePassword,
  verifyPassword,
  updatePassword
);
userRouter.get("/list", verifyAuth, getUserList);
userRouter.get("/info", verifyAuth, getMyInfo); //获取我的用户信息
userRouter.get("/info/:id", verifyAuth, getUserInfo); //获取用户信息
userRouter.post("/add/:friendId", verifyAuth, addFriend); //加好友
userRouter.get("/search", searchUser); //加好友
userRouter.post("/info", verifyAuth, updateUserInfo);
module.exports = userRouter;

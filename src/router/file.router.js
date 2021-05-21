const Router = require("koa-router");

const { verifyAuth } = require("../middleware/auth.middleware");

const { saveAvatarInfo, getAvatar } = require("../controller/file.controller");

const fileRouter = new Router({
  prefix: "/file",
});

const { avatarHandler } = require("../middleware/file.middleware");

fileRouter.post("/upload/avatar", verifyAuth, avatarHandler, saveAvatarInfo);
fileRouter.get("/avatar/:userId", getAvatar);

module.exports = fileRouter;

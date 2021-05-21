const fs = require("fs");

const fileService = require("../service/file.service");
const userService = require("../service/user.service");
const { AVATAR_PATH } = require("../constants/file-types");
const { APP_HOST, APP_PORT } = require("../app/config");

class FileController {
  async saveAvatarInfo(ctx, next) {
    //获取文件信息
    const { filename, mimetype, size } = ctx.req.file;
    const userId = ctx.user.id;
    //添加到数据库
    await fileService.saveAvatar(filename, mimetype, size, userId);
    //将图片地址保存到用户表中
    const avatarUrl = `http://${APP_HOST}:${APP_PORT}/file/avatar/${userId}`;
    await userService.updateAvatarurlById(avatarUrl, userId);
    ctx.body = {
      status: 200,
      data: { data: "上传头像成功!" },
    };
  }
  async getAvatar(ctx, next) {
    const userId = ctx.params.userId;
    //从数据库中得到头像信息
    const avatarInfo = await fileService.getAvatarById(userId);
    if (!avatarInfo) {
      return (ctx.body = {
        status: 404,
        msg: "没有找到该用户的头像信息",
      });
    }
    const avatarPath = `${AVATAR_PATH}/${avatarInfo.filename}`;
    ctx.response.set("content-type", avatarInfo.mimeType);
    ctx.body = fs.createReadStream(avatarPath);
  }
}

module.exports = new FileController();

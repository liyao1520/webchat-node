const Multer = require("koa-multer");
const { AVATAR_PATH } = require("../constants/file-types");

const avatarUplod = Multer({
  dest: AVATAR_PATH,
});
const avatarHandler = avatarUplod.single("avatar"); //single :单一的

module.exports = {
  avatarHandler,
};

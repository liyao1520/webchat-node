const userService = require("../service/user.service");

class UserController {
  //用户注册接口
  async create(ctx, next) {
    //1.获取用户名和密码
    const { username, password, sex } = ctx.request.body;
    //2.添加到数据库
    const result = await userService.create(username, password, sex);
    ctx.body = {
      status: 200,
      data: {
        id: result.insertId,
        username: username,
      },
    };
  }
  async getUserList(ctx, next) {
    const userid = ctx.user.id;
    const result = await userService.getUserList(userid);
    ctx.body = {
      status: 200,
      data: result,
    };
  }
  async getUserInfo(ctx, next) {
    const userId = ctx.params.id;
    const [result] = await userService.getUserInfoById(userId);
    if (!result) {
      ctx.body = {
        status: 404,
        msg: "没找到该用户",
      };
    }
    ctx.body = {
      status: 200,
      data: result,
    };
  }
  async getMyInfo(ctx, next) {
    const userId = ctx.user.id;
    const [result] = await userService.getUserInfoById(userId);
    if (!result) {
      ctx.body = {
        status: 404,
        msg: "没找到该用户",
      };
    }
    ctx.body = {
      status: 200,
      data: result,
    };
  }
  async addFriend(ctx, next) {
    const userId = ctx.user.id;
    const friendId = parseInt(ctx.params.friendId);
    if (!friendId || friendId == NaN) {
      return (ctx.body = {
        status: 404,
        msg: "参数错误",
      });
    } else if (userId === friendId) {
      return (ctx.body = {
        status: 404,
        msg: "自己和自己不能是好友",
      });
    }
    const isFriend = await userService.isFriend(userId, friendId);
    if (isFriend) {
      return (ctx.body = {
        status: 404,
        msg: "已经是好友了无法再添加!",
      });
    }
    const result = await userService.addFriend(userId, friendId);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 404,
        msg: "添加失败!",
      };
    }
  }
  async searchUser(ctx, next) {
    const { type, keyword } = ctx.query;
    if (!type || !keyword) {
      return (ctx.body = {
        status: 404,
        msg: "参数错误",
      });
    }
    let userinfo;
    if (type == "id") {
      userinfo = await userService.getUserInfoById(keyword);
    }
    if (type == "name") {
      userinfo = await userService.getUserListInfoByNmae(keyword);
    }
    ctx.body = {
      status: 200,
      userinfo,
    };
  }
  async updateUserInfo(ctx, next) {
    const { username, sex, age, city, intro } = ctx.request.body;
    if (!username) {
      return (ctx.body = {
        status: 404,
        msg: "参数不正确",
      });
    }
    const id = ctx.user.id;
    const isExist = await userService.isExistBaseInfoById(id);
    //如果存在修改信息,不存在添加信息
    if (isExist) {
      await userService
        .updateUserBaseInfo(sex, username, id, age, city, intro)
        .then((res) => {
          ctx.body = {
            status: 200,
            data: "修改成功!",
          };
        })
        .catch((err) => {
          ctx.body = {
            status: 404,
            msg: "修改失败!",
          };
        });
    } else {
      await userService
        .insertUserBaseInfo(sex, username, id, age, city, intro)
        .then((res) => {
          ctx.body = {
            status: 200,
            data: "修改成功!",
          };
        })
        .catch((err) => {
          ctx.body = {
            status: 404,
            msg: "修改失败!",
          };
        });
    }
  }
  async updatePassword(ctx, next) {
    const userId = ctx.user.id;
    const newPassword = ctx.request.body.newPassword;
    const result = await userService.updatePassword(newPassword, userId);
    ctx.body = {
      status: 200,
      data: result,
    };
  }
}

module.exports = new UserController();

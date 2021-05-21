const onlineStatus = require("../service/onlineStatus");
module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("disconnect", function () {
      onlineStatus.change(socket.userId, 0).then((res) => {
        console.log(res);
      }); //将状态改为离线
      console.log("disconnect", socket.userId);
    });
    socket.on("setUserId", function (data) {
      console.log("setUserId", data.id);
      socket.userId = data.id;
      onlineStatus.change(data.id, 1).then((res) => {
        console.log(res);
      }); //将状态改为在线
    });
    socket.on("sendMsg", (data, fn) => {
      const fid = data.friendId;
      let socketid;
      for (let item of io.sockets.sockets.values()) {
        if (item.userId == data.friendId) {
          socketid = item.id;
        }
      }
      if (socketid) {
        io.to(socketid).emit("getMsg", {
          type: 1,
          friendId: data.userId,
          content: data.msg,
          time: new Date().getTime(),
        });
        fn("success");
      } else {
        fn("fail");
      }
    });
  });
};

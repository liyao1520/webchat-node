const path = require("path");
const Koa = require("koa");
const static = require("koa-static");
const bodyparser = require("koa-bodyparser");
const useRoutes = require("../router/index");
const errorHandler = require("../app/errorHandler");
const { APP_PORT } = require("./config");
const socket = require("../socket/index");
const app = new Koa();
/////////////////////////
const server = require("http").Server(app.callback());
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
socket(io);
/////////////////////////
app.useRoutes = useRoutes;
app.use(static(path.resolve(__dirname, "../public", "./dist")));

app.use(bodyparser());
app.useRoutes();
app.on("err", errorHandler);

server.listen(APP_PORT, () => {
  console.log("服务启动成功!", "http://localhost:4000");
});

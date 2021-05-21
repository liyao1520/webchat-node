const fs = require("fs");
const Router = require("koa-router");

const useRoutes = function () {
  fs.readdirSync(__dirname).forEach((filename) => {
    if (filename == "index.js") {
      return;
    }
    const router = require("./" + filename);
    this.use(router.routes());
    this.use(router.allowedMethods());
  });
};

module.exports = useRoutes;

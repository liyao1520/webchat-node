const { PARAMS_ERROR } = require("../constants/error-types");
module.exports = function () {
  for (arg of arguments) {
    if (arg === undefined || arg === null) {
      return new Error(PARAMS_ERROR);
    }
  }
  return false;
};

// 判断参数是否有为null或者undefind 如果有返回错误对象,如果没有返回false

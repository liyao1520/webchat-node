const errorTypes = require("../constants/error-types");

const errHandler = (error, ctx) => {
  console.log("发生错误!");
  let status,
    message = error.message;
  console.log(error);
  switch (error.message) {
    case errorTypes.PARAMS_ERROR:
      status = 400;
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409;
      break;
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 400;
      break;
    case errorTypes.PASSWORD_IS_INCORRECT:
      status = 400;
      break;
    case errorTypes.UNAUTHORIZATION:
      status = 401;
      break;
    case errorTypes.UNPERMISSION:
      status = 401;
      break;
    default:
      status = 404;
      message = "~~~~~~~~~~~~~404 not found~~~~~~~";
  }
  ctx.body = {
    message,
    status,
  };
};
module.exports = errHandler;

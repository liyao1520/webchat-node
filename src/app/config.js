const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const PRIVATE_KEY = fs.readFileSync(path.join(__dirname, "key", "private.key"));
const PUBLIC_KEY = fs.readFileSync(path.join(__dirname, "key", "public.key"));
module.exports = {
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  APP_HOST,
  APP_PORT,
} = process.env;
module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;

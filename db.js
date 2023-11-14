const mysql = require("mysql2");
const { HOSTNAME, USER, PASSWORD, DB_NAME } = process.env;
const conn = mysql.createPool({
  host: HOSTNAME,
  user: USER,
  password: PASSWORD,
  database: DB_NAME,
});
module.exports = { conn };

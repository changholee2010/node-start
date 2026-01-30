const mysql = require("mysql2/promise");

// pool 생성.
const pool = mysql.createPool({
  host: "",
  user: "",
  password: "",
  database: "",
});

module.exports = pool;

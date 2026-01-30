// 서비스 영역.
const pool = require("../db");

const svc = {
  list: async () => {
    const [rows, schem] = await pool.query("select * from board");
    return rows;
  },
  create: async (data) => {
    const { title, content, writer } = data;
    const result = await pool.query(
      "insert into board (title, content, writer) values (?,?,?)",
      [title, content, writer],
    );
    return result;
  },
  remove: async (id) => {
    const result = await pool.query("delete from board where id = ?", [id]);
    return result;
  },
};

module.exports = svc;

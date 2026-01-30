// 컨트롤러 영역.
const svc = require("../services/board.service");

const ctrl = {
  list: async (req, res) => {
    const result = svc.list();
    res.send(result);
  },
  create: async (req, res) => {
    const result = svc.create({});
    res.send(result);
  },
  remove: async (req, res) => {
    const result = svc.remove("");
    res.send(result);
  },
};

module.exports = ctrl;

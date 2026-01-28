const crypto = require("crypto");
const numAry = ["1111", "2222", "3333", "4444", "5555"];

for (let num of numAry) {
  // 암호화 비번.
  let passwd = crypto.createHash("sha512").update(num).digest("base64");
  console.log(num, passwd);
}

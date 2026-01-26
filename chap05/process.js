const process = require("process");
const os = require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(`${(os.freemem() / os.totalmem()) * 100}%`);

// for (let i = 1; i <= 10; i++) {
//   console.log(`i의 값은 ${i}`);
//   if (i == 5) {
//     process.exit(); // 프로세스의 종료.
//   }
// }
// console.log(process.env.Path.split(";"));

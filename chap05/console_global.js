//
console.time("time check");
for (let i = 1; i <= 100000; i++) {}
console.timeEnd("time check");

console.log(`Hello, Choi!`);
console.error("Error 발생!");

const ary = [
  { name: "홍길동", age: 20 },
  { name: "김길동", age: 22 },
];
console.table(ary); // 표형식 출력.

const obj = {
  // Depth 1
  id: "user_2026_01",
  username: "tech_pioneer",
  accountSettings: {
    // Depth 2
    security: {
      // Depth 3
      authentication: {
        // Depth 4
        multiFactor: {
          // Depth 5
          enabled: true,
          method: "biometric",
          lastVerified: "2026-01-26",
        },
        passwordHistory: ["pw1", "pw2"],
      },
      firewall: "active",
    },
    theme: "dark",
  },
  status: "online",
};
console.dir(obj);

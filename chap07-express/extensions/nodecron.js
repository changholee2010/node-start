require("dotenv").config({ path: "../.env" });
const cron = require("node-cron");
const transporter = require("./nodemailer");

const cron_job = cron.schedule(
  " * * 1 * *",
  () => {
    transporter.sendMail(
      {
        from: process.env.FROM,
        to: "cholee@yedam.ac",
        subject: "Cron연습",
        text: "메일 발송 연습",
      },
      (err) => {
        if (err) {
          console.log("발송에러");
        }
        console.log("발송완료");
      },
    );
    console.log("메일발송 시작.");
  },
  {
    scheduled: false,
  },
);
// start() 호출.
// cron_job.stop();
// cron_job.start();
module.exports = cron_job;

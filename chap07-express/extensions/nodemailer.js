const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.daum.net",
  port: 465,
  secure: true,
  auth: {
    user: "sample@email.com",
    pass: "afdfdfdsfdsfdasf",
  },
});

module.exports = transporter;

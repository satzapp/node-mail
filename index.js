"use strict";

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(){
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'satzapplications@gmail.com',
      pass: 'XXXXXXXXXXXXX'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Satz" <satzapplications@gmail.com>', // sender address
    to: "satzk@gmail.com", // list of receivers
    subject: "Hello Satz K.", // Subject line
    text: "Hello Satz?", // plain text body
    html: "<b>Hello Satz?</b>" // html body
  });

  // return message sent id
  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
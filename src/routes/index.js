const { Router } = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config({path: 'variables.env'})
const router = Router();

router.post('/send-email', async (req, res) => {
  const { name, company, email, phone, message } = req.body;

  contentHTML = `
    <h1>You have a new email!</h1>
    <ul>
      <li>Name: ${name}</li>
      <li>Company name: ${company}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
    </ul>
    <h2>Message:</h2>
    <p>${message}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    }
  });

  const info = await transporter.sendMail({
    from: "'agence b+p contact' <agencebpcontact@gmail.com>",
    to: process.env.MAIL_RECEIVER,
    subject: 'Website Contact',
    html: contentHTML
  });

  console.log('Message sent', info.messageId);

  res.send('recieved');
})

module.exports = router;
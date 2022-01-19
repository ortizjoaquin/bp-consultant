const { Router } = require('express');
const router = Router();

router.post('/send-email', (req, res) => {
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

  console.log('content', contentHTML);

  res.send('recieved');
})

module.exports = router;
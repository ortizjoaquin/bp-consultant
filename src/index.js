require('dotenv').config()
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

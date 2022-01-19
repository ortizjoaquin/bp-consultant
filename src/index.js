const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => console.log('Server running 🟢'));

// // View engine setup
// app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
// app.set('view engine', 'handlebars');

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// //Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.send('Hello World');
// })

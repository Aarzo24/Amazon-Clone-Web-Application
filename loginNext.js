const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = express.Router();
const emailValidator = require('deep-email-validator');

async function isEmailValid(email) {
  return emailValidator.validate(email)
}


const app = express();
const port = process.env.PORT || 3000;



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));



// Database connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'logindb'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/get', (req, res) => {
    res.render('amazonclone');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/donate', (req, res) => {
    res.render('donate');
});

app.get('/elec', (req, res) => {
    res.render('elec');
});

app.get('/hotnew', (req, res) => {
    res.render('hotnew');
});

app.get('/shoe', (req, res) => {
    res.render('shoe');
});


app.get('/form', (req, res) => {
    res.render('subscription');
});

app.get('/', (req, res) => {
    res.render('loginNext');
});

app.post('/register', (req, res) => {
    const {name, email, password } = req.body;
    const newUser = { name, email, password };
 console.log(newUser);
    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
        if (err) {
            console.error('Database insertion error:', err);
            return;
        }
        console.log('User registered:', result);

        res.render('registration');
    });   
});

router.post('/register', async function(req, res, next) {
    const {email, password} = req.body;
  
    if (!email || !password){
      return res.status(400).send(
        'Email or password missing.');
    };
   
    
    const {valid, reason, validators} = await isEmailValid(email);
  
    if (valid) {
        return res.send({message: "OK"});};
        
   return res.status(400).send(
       'Please provide a valid email address.',
      validators[reason].reason);
    });
  


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



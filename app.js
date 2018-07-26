const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/cards', (req,res) => {
    res.render('cards', {prompt: "What's the smallest animal on Earth?"});
});

app.get('/student', (req,res) => {
    res.render('student');
});
app.post('/student', (req,res) => {
    var user = req.body.user;
    // console.log(user);
    res.render('student', {user: user});
});


app.listen(4000, () => {
    console.log('Server Running at localhost:4000');
});
const express = require('express');
const app = express()

app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/cards', (req,res) => {
    res.render('cards', {prompt: "What's the smallest animal on Earth?", hint: "The animal lives deep under the ocean"});
});

app.get('/student', (req,res) => {
    res.render('student');
});


app.listen(4000, () => {
    console.log('Server Running at localhost:4000');
});
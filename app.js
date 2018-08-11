const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/styles', express.static('styles'));
app.use('/html', express.static('html'));
app.use('/html', express.static('html/stylesheets'));
app.set('view engine', 'pug');

const mainRoute = require('./routes/index');
const cardRoute = require('./routes/cards');

app.use(mainRoute);
app.use('/cards', cardRoute);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});


app.listen(5000, () => {
    console.log('Running at localhost:5000');
});

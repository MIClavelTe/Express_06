const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    var username = req.cookies.user
    if (username) {
        res.render('index', {user: username});
    } else {
        res.redirect('/student');
    }
});
router.post('/bye', (req, res) => {
    res.clearCookie('user');
    res.redirect('/student');
});

router.get('/student', (req,res) => {
    var username = req.cookies.user
    if (username) {
        res.redirect('/');
    } else {
        res.render('student', {user: username});
    }
});
router.post('/student', (req,res) => {
    var user = req.body.user;
    res.cookie('user', user)
    res.render('student', {user: user});
});

module.exports = router;
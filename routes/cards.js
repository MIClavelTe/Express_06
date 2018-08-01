const express = require('express');
const router = express.Router();

const { data } = require('../data/flashcard.json');
const { cards } = data;

router.get('/', (req,res) => {
    var random = Math.floor(Math.random() * 10)
    res.render('cards', {
        prompt: cards[random].question, 
        hint: cards[random].hint, 
        answer: cards[random].answer
    });
});
router.post('/', (req,res) => {
    var random = Math.floor(Math.random() * 10)
    res.render('cards', {
        prompt: cards[random].question, 
        hint: cards[random].hint, 
        answer: cards[random].answer
    });
});

module.exports = router;
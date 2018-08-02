const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcard.json');
const { cards } = data;

router.get('/:id', (req, res) => {
    res.render('cards', { 
        prompt: cards[req.params.id].question,
        hint: cards[req.params.id].hint,
        answer: cards[req.params.id].answer
    });
});

router.post('/:id', (req, res) => {
    res.render('cards', { 
        prompt: cards[req.params.id].question,
        hint: cards[req.params.id].hint,
        answer: cards[req.params.id].answer
    });
});

module.exports = router;
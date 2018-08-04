const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcard.json');
const { cards } = data;

router.get('/', (req, res) => {
    var length = cards.length
    var random = Math.floor(Math.random() * length);
    res.redirect(`/cards/${random}`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    if (!side) {
        res.redirect(`/cards/${id}?side=question`);
    }

    var user = req.cookies.user;
    const prompt = cards[id][side];
    const { hint } = cards[id];
    var data = {id, prompt, user}

    if (side == "question") {
        data.hint = hint
        data.side = 'answer'
        data.showSide = 'Answer'
    } else if (side == "answer") {
        data.side = 'question'
        data.showSide = "Question"
    } else if (side == "hint") {
        data.prompt = ""
        data.hint = hint;
        data.side = "answer"
        data.showSide = "Answer"
    }

    res.render('cards', data);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcard.json');
const { cards } = data;

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const prompt = cards[id][side];
    const { hint } = cards[id];
    var data = {prompt}

    if (side == "question") {
        data.hint = hint
        res.render('cards', data);
    }

    res.render('cards', data);
});

module.exports = router;
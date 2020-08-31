const express = require('express');
const quizzesRepo = require('../repositories/quizzes');
const quizzesIndexTemplate = require('../views/quizzes/index');

const router = express.Router();

router.get('/', async(req, res) => {
    if (!req.session.userId) {
        res.redirect('/signin');
    } else {
        const quizzes = await quizzesRepo.getAll();
        res.send(quizzesIndexTemplate({ quizzes }));
    }
});

module.exports = router;
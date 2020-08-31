const express = require('express');
const resultsRepo = require('../repositories/results');
const usersRepo = require('../repositories/users');
const resultsShowTemplate = require('../views/results/show');

const router = express.Router();

router.get('/results', async(req, res) => {
    const user = await usersRepo.getOne(req.session.userId);
    if (!user) {
        req.send("No user found");
    }

    const results = [];
    for (result of user.results) {
        results.push(await resultsRepo.getOne(result));
    }
    console.log(results);
    // const quizzes = await quizzesRepo.getAll();
    res.send(resultsShowTemplate({ results }));
});

module.exports = router;
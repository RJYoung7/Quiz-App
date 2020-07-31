const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const quiz = require('./quiz')
const question = require('./question');
const quizzesRepo = require('./repositories/quizzes');
let Quiz = quiz.Quiz;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});
app.get('/select.js', (req, res) => {
    res.sendFile(__dirname + '/select.js');
});
app.get('/quiz.js', (req, res) => {
    res.sendFile(__dirname + '/quiz.js');
});

app.post('/', async(req, res) => {
    const newQuiz = new Quiz(req.body.name);
    newQuiz.addQuestions(req.body);
    await quizzesRepo.create(newQuiz);
    res.send(`You created a quiz!`);
});

app.listen(3000, () => {
    console.log("Listening");
});
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminQuizzesRouter = require('./routes/admin/quizzes');
const quizzesRouter = require('./routes/quizzes');
const resultsRouter = require('./routes/results');
const quizzesRepo = require('./repositories/quizzes');
const resultsRepo = require('./repositories/results');
const usersRepo = require('./repositories/users');
const myQuizzesTemplate = require('./views/quizzes');
const newQuizTemplate = require('./views/admin/quizzes/new');
const quizTemplate = require('./views/quizzes/quiz');
const questionTemplate = require('./views/quizzes/question');
const resultsTemplate = require('./views/quizzes/complete');
const app = express();



app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: [
        'lalakdsjf;alksdjf'
    ]
}));

app.use(authRouter);
app.use(adminQuizzesRouter);
app.use(quizzesRouter);
app.use(resultsRouter);

app.get('/quiz/:id', async(req, res) => {
    const quiz = await quizzesRepo.getOne(req.params.id);
    if (!quiz) {
        return res.send('Quiz not found');
    }

    res.send(quizTemplate({ quiz }));
});

app.get('/complete/:id', async(req, res) => {
    console.log(req.params);
    const result = await resultsRepo.getOne(req.params.id);
    console.log("result: ", result);
    res.send(resultsTemplate({ result }));
})

app.post('/complete', async(req, res) => {
    // console.log("body: ", req.body);
    // console.log(req.session.userId)
    const result = await resultsRepo.create(req.body);
    const user = await usersRepo.getOne(req.session.userId);
    if (!user) {
        req.send('Could not find user');
    }

    user.results.push(result.id);
    await usersRepo.update(user.id, { results: user.results });
    // console.log(result);
    // res.send("blah");
    // res.send(resultsTemplate(req.body));

    res.redirect(`/complete/${result.id}`);

});

app.get('/quiz/:id/start', async(req, res) => {
    // console.log("***********************************************");
    // console.log(req.params);
    const quiz = await quizzesRepo.getOne(req.params.id);
    // console.log(quiz);
    const questionNum = 0; //parseInt(req.params.questionNumber);
    // console.log(questionNum);
    // console.log("-------------------------------------------------------");
    // console.log("res:", res.body);
    // console.log(quiz.questions.length);
    // res.write(questionTemplate({ quiz, questionNum }));
    res.write(JSON.stringify(quiz));
    // res.send(questionTemplate({ quiz, questionNum }), quiz);
    res.end();

    // if (questionNum >= quiz.questions.length) {
    //     res.send('Quiz Complete');
    // } else {
    //     res.send(questionTemplate({ quiz, questionNum }));
    // }

});



app.listen(3000, () => {
    console.log("Listening");
});
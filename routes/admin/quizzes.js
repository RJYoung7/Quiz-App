const express = require('express');

const quizzesRepo = require('../../repositories/quizzes');
const quizzesIndexTemplate = require('../../views/admin/quizzes/index');
const newQuizTemplate = require('../../views/admin/quizzes/new');
const quizEditTemplate = require('../../views/admin/quizzes/edit');
const { requireAuth, handleErrors } = require('./middlewares');
const { requireQuizName, requireQuestion } = require('./validators');
const quiz = require('../../quiz');
const { route } = require('./auth');


const router = express.Router();

let Quiz = quiz.Quiz;


router.get('/admin/quizzes', requireAuth, async(req, res) => {
    const quizzes = await quizzesRepo.getAll();
    res.send(quizzesIndexTemplate({ quizzes }));
});

router.get('/admin/quizzes/new', requireAuth, (req, res) => {
    res.send(newQuizTemplate({}));
});

router.post('/new', [requireQuizName],
    handleErrors(newQuizTemplate), async(req, res) => {
        console.log(req.params);
        const newQuiz = new Quiz(req.body);
        await quizzesRepo.create(newQuiz);
        res.redirect('/admin/quizzes');
    });

router.get('/admin/quizzes/:id/edit', async(req, res) => {
    const quiz = await quizzesRepo.getOne(req.params.id);
    if (!quiz) {
        return res.send('Quiz not found');
    }

    res.send(quizEditTemplate({ quiz }));
});

router.post('/admin/quizzes/:id/edit',
    requireAuth,
    // handleErrors(quizEditTemplate, async(req) => {
    //     const quiz = await quizzesRepo.getOne(req.params.id);
    //     return { quiz };
    // }),
    async(req, res) => {
        const changes = req.body;
        console.log('id', req.params.id);
        const newQuiz = new Quiz(req.body);

        console.log(newQuiz);


        try {
            await quizzesRepo.update(req.params.id, newQuiz);
        } catch (err) {
            res.send('Could not find item');
        }

        res.redirect('/admin/quizzes');
        // res.send('edit');
    });

router.post('/admin/quizzes/:id/delete', async(req, res) => {
    await quizzesRepo.delete(req.params.id);
    res.redirect('/admin/quizzes');
});

module.exports = router;
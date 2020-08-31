const start = document.getElementById('start');
const quizSection = document.getElementById('quiz');
let quiz = {};
let questionNumber = 0;
const quizMetrics = {
    name: "",
    id: 0,
    answers: [],
    time: 0,
    correct: 0,
    totalAnswers: 0
};
let startTime, endTime;

const quizId = document.getElementById('quizId').value;

start.addEventListener('click', () => {
    quizSection.classList.remove('hero', 'is-success', 'is-fullheight');
    fetch(`http://localhost:3000/quiz/${quizId}/start`, { method: "GET" })
        .then(res => {
            res.text()
                .then(function(text) {
                    quiz = JSON.parse(text);
                })
                .then(() => {
                    quizSection.innerHTML = getQuestion(quiz, questionNumber);
                    startClock();
                    quizMetrics.id = quiz.id
                    quizMetrics.name = quiz.name;
                })
        });

});

const answerSubmit = document.querySelector('body');
answerSubmit.addEventListener('click', async(e) => {
    if (e.target.id === 'next') {
        if (questionNumber >= quiz.questions.length) {
            throw new console.error('Trying to access a question that doe not exist');
        } else {
            checkAnswer();
            quizSection.innerHTML = getQuestion(quiz, questionNumber);
            console.log('clicked');
        }
    }

    if (e.target.id === 'finish') {
        checkAnswer();
        endClock();
        fetch('http://localhost:3000/complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify(quizMetrics),
            })
            .then(res => {
                location.href = res.url;
            })
            .catch(function(err) {
                console.info(err);
            });
    }

});

function startClock() {
    startTime = performance.now();
}

function endClock() {
    endTime = performance.now();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;

    // Get seconds
    let seconds = Math.round(timeDiff);
    quizMetrics.time = seconds;
}

function checkAnswer() {
    let ele = document.getElementsByName('answer');

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            quizMetrics.answers.push({
                answer: ele[i].value,
                score: ele[i].value === quiz.questions[questionNumber - 1].answerId ? 1 : 0
            });
            quizMetrics.correct += ele[i].value === quiz.questions[questionNumber - 1].answerId ? 1 : 0;
            quizMetrics.totalAnswers++;
        }
    }
}

function getQuestion(quiz, questionNum) {

    const curQuestion = quiz.questions[questionNum];
    questionNumber = questionNum + 1;
    let buttonElement = '';
    if (questionNumber >= quiz.questions.length) {
        buttonElement = finishQuiz();
    } else {
        buttonElement = nextQuestion();
    }
    return `   
    <div class="card">
        <div class="card-content">
            <p class="title">
                ${curQuestion.question}
            </p>
            <div class="questionControl">
                <div class="field">
                <label class="radio">
                    <input type="radio" name="answer" value="A">
                    ${curQuestion.possibleAnswers[0].answer}
                </label>
                </div>
                <div class="field">
                <label class="radio">
                    <input type="radio" name="answer" value="B">
                    ${curQuestion.possibleAnswers[1].answer}
                </label>
                </div>
                <div class="field">
                <label class="radio">
                    <input type="radio" name="answer" value="C">
                    ${curQuestion.possibleAnswers[2].answer}
                </label>
                </div>
                <div class="field">
                <label class="radio">
                    <input type="radio" name="answer" value="D">
                    ${curQuestion.possibleAnswers[3].answer}
                </label>
                </div>
            </div>
        </div>
        <footer class="card-footer">
        ${buttonElement}
        </footer>
    </div>
    `;
}

function finishQuiz() {
    return `
        <button class="card-footer-item button" id="finish">Finish</button>
    `;
}

function nextQuestion() {
    return `
        <button class="card-footer-item button" id="next">Next</button>
    `;
}
const layout = require('../layout');
module.exports = ({ quiz, questionNum }) => {
    // console.log(quiz);
    // console.log(questionNum);
    const curQuestion = quiz.questions[questionNum];
    const nextQuestion = questionNum + 1;
    // console.log(curQuestion);

    return layout({
        content: `
            <section id="quiz">
                
            </section>
        <script src="/quiz.js"></script>
        `
    });
}


/* <div class="card">
                    <div class="card-content">
                        <p class="title">
                            ${curQuestion.question}
                        </p>
                        <div class="control">
                            <label class="radio">
                                <input type="radio" name="answer">
                                ${curQuestion.possibleAnswers[0].answer}
                            </label>
                            <label class="radio">
                                <input type="radio" name="answer">
                                ${curQuestion.possibleAnswers[1].answer}
                            </label>
                            <label class="radio">
                                <input type="radio" name="answer">
                                ${curQuestion.possibleAnswers[2].answer}
                            </label>
                            <label class="radio">
                                <input type="radio" name="answer">
                                ${curQuestion.possibleAnswers[3].answer}
                            </label>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <button class="card-footer-item button" id="next">Next</button>
                    </footer>

                </div> */


//<form action="/quiz/${quiz.id}/${nextQuestion}">
//</form>

//<script src="index.js"></script>
//<script src="quiz.js"></script>
const layout = require('../layout');
module.exports = ({ quiz }) => {

        const numQuestions = quiz.questions.length;

        return layout({
            content: `
            <section id="quiz" class="hero is-success is-fullheight">
                <div class="hero-body content">
                    <div class="container">
                        <h1 class="title">
                            ${quiz.name}
                        </h1>
                        <h2 class="subtitle">
                            Number of questions: ${numQuestions}
                        </h2>
                        <input id="quizId" type="hidden" value=${quiz.id}></input>
                        <button id="start" class="button">Start Quiz</button>
                    </div>
                </div>
            </section>
        <script src="/quiz.js"></script>

        `
        });
    }
    //<form action="/quiz/${quiz.id}/start">
    //</form>
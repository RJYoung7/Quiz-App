const layout = require('../layout');

module.exports = ({ quizzes }) => {
    // console.log(quizzes);
    const renderedQuizzes = quizzes.map(quiz => {
        return `
            <div class="column is-one-quarter">
                <div class="card quiz-card">
                    <div class="card-content">
                        <p class="title">
                            ${quiz.name}
                        </p>
                    </div>
                    <footer class="card-footer">
                        <form action="/quiz/${quiz.id}">
                            <button class="button is-primary">Select</button>
                        </form>
                    </footer>
                </div>
            </div>
        `;
    }).join('\n');

    return layout({
        content: `
        <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">Quizzes</h2>
                <div class="columns quizzes">
                  ${renderedQuizzes}  
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
      <script src="/index.js"></script>

    `
    });
}
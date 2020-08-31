const layout = require('../layout');

module.exports = ({ quizzes }) => {
    // console.log(quizzes);
    const renderedQuizzes = quizzes.map(quiz => {
        return `
            <tr>
              <td>${quiz.name}</td>
              <td>${quiz.numberOfQuestion}</td>
              <td>
              <a href="/admin/quizzes/${quiz.id}/edit">
                  <button class="button is-link">
                  Edit
                  </button>
              </a>
              </td>
              <td>
              <form method="POST" action="/admin/quizzes/${quiz.id}/delete">
                <button class="button is-danger">Delete</button>
              </form>
              </td>
            </tr>
        `;
    }).join('');

    return layout({
        content: `
        <div class="control">
          <h1 class="subtitle">Quizzes</h1>
          <a href="/admin/quizzes/new" class="button is-primary">New Quiz</a>
        </div>
        <table class="table">
          <thread>
            <tr>
              <th>Name</th>
              <th># of Questions</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thread>
          <tbody>
            ${renderedQuizzes}
          </tbody>
        </table>

    `
    });
}
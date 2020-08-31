const layout = require('../layout');

module.exports = ({ result }) => {
    console.log('quizMetric: ', result);

    const passFail = () => {
        if (parseFloat(result.correct / result.totalAnswers) >= 0.5) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
    return layout({
        content: `
            <div class="card">
                <div class="card-content">
                    <p class="title">
                    Results
                    </p>
                    <p class="subtitle center">
                        Total Time: ${result.time} seconds
                    </p>
                    <p class="subtitle center">
                        Total Correct: ${result.correct} out of ${result.totalAnswers}
                    </p>
                    <p class="subtitle center">
                        You ${passFail()}
                    </p>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                    <span>
                        <a href="/">My Quizzes</a>
                    </span>
                    </p>
                </footer>
            </div>
        `
    });
}
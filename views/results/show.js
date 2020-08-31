const layout = require('../layout');

module.exports = ({ results }) => {

    const renderedResults = results.map(result => {
        const passFail = () => {
            if (parseFloat(result.correct / result.totalAnswers) >= 0.5) {
                return "Passed";
            } else {
                return "Failed";
            }
        }
        return `
            <tr>
                <td>${result.name}</td>
                <td>${passFail()}</td>
                <td>${result.correct}</td>
                <td>${result.totalAnswers}</td>
                <td>${result.time}</td>
            </tr>
        `
    }).join('');

    return layout({
        content: `

        <section>
            <div class="control">
                <h2 class="title text-center">Results</h2>
            </div>
            <table class="table tableControl">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Pass/Fail</th>
                        <th># Correct</th>
                        <th># Questions</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                ${renderedResults}
                </tbody>
            </table>
        </section>
        `
    });
}
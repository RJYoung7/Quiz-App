const layout = require('../layout');

module.exports = ({ quiz }) => {
    // console.log(quiz.questions.map(question => {
    //     console.log("question:", question);
    // }));

    const renderedQuestions = quiz.questions.map(question => {
        return `
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Question</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input value="${question.question}" class="input" type="text" name="question" placeholder="Please enter your question...">
                    </div>
                    <p class="help is-danger">
                        This field is required
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">A</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input value="${question.possibleAnswers[0].answer}" class="input" type="text" name="a" placeholder="Enter a possible answer">
                    </div>
                    <p class="help is-danger">
                        This field is required
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">B</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input value="${question.possibleAnswers[1].answer}" class="input" type="text" name="b" placeholder="Enter a possible answer">
                    </div>
                    <p class="help is-danger">
                        This field is required
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">C</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input value="${question.possibleAnswers[2].answer}" class="input" type="text" name="c" placeholder="Enter a possible answer">
                    </div>
                    <p class="help is-danger">
                        This field is required
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">D</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input value="${question.possibleAnswers[3].answer}" class="input" type="text" name="d" placeholder="Enter a possible answer">
                    </div>
                    <p class="help is-danger">
                        This field is required
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Answer</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control">
                        <div class="select is-fullwidth">
                        <select name="answer">
                            <option value="${question.answerId}" selected>${question.answerId}</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>                             
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    }).join('');


    return layout({
        content: `
        <div class="container question">
            <form method="POST">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Name</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input value="${quiz.name}" class="input" type="text" name="name" placeholder="Name of quiz....">
                                </div>
                                <p class="help is-danger">
                                    This field is required
                                </p>
                            </div>
                        </div>
                    </div>
                    
            ${renderedQuestions}
            <input type="hidden" name="numQuestions" id="numQuestionsValue" value="${quiz.numberOfQuestion}">

            <button class="button is-primary">Edit</button>
            </form>
        </div> 
        `
    });
}
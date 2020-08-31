const addQuestionBtn = document.getElementById('addQuestion');
let numQuestions = 0;
addQuestionBtn.addEventListener('click', function() {
    const quizDiv = document.getElementById('quizDiv');
    const div = document.createElement('div');

    div.innerHTML = addQuestion("");
    quizDiv.appendChild(div);
    numQuestions++;

    const numberOfQuestionsText = document.getElementById('numQuestionsText');
    const numberOfQuestionsValue = document.getElementById('numQuestionsValue');
    numberOfQuestionsText.innerText = `${numQuestions}`;
    numberOfQuestionsValue.value = numQuestions;
    // console.dir(numberOfQuestionsText);
    // console.dir(numberOfQuestionsValue);
});

function addQuestion({ errors }) {
    return `
    <div class="container question">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Question</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input required class="input" type="text" name="question" placeholder="Please enter your question...">
                    </div>
                    <p class="help is-danger">
                    ${getError(errors, 'question')}
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
                        <input required class="input" type="text" name="a" placeholder="Enter a possible answer">
                    </div>
                    <p class="help is-danger">
                    ${getError(errors, 'question')}

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
                        <input required class="input" type="text" name="b" placeholder="Enter a possible answer">
                    </div>
                    <p class="help is-danger">
                    ${getError(errors, 'question')}

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
                        <input required class="input" type="text" name="c" placeholder="Enter a possible answer">
                    </div>
                    <p class="help is-danger">
                    ${getError(errors, 'question')}
                        
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
                        <input required class="input" type="text" name="d" placeholder="Enter a possible answer">
                    </div>
                    <p class="help is-danger">
                    ${getError(errors, 'question')}

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
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>                             
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

function getError(errors, prop) {
    try {
        return errors.mapped()[prop].msg;
    } catch (err) {
        return '';
    }
}
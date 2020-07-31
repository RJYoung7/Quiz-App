// Create new quiz content
const createNewQuiz = document.getElementById('newQuiz');

createNewQuiz.addEventListener('click', () => {

    // Select the section element in the DOM
    const section = document.querySelector('section');

    // Change content in section to newQuiz
    section.innerHTML = newQuizForm();

    const addQuestionBtn = document.getElementById('addQuestion');

    addQuestionBtn.addEventListener('click', function() {
        const quizDiv = document.getElementById('quizDiv');
        const div = document.createElement('div');
        div.innerHTML = addQuestion();
        quizDiv.appendChild(div);
    });

});


function newQuizForm() {
    const quizDiv = `
        <form method="POST">
        <div class="container">
            <h1 class="title">Create a Quiz</h1>  
        </div>
        <div id="quizDiv" class="container">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" name="name" placeholder="Name of quiz....">
                        </div>
                        <p class="help is-danger">
                            This field is required
                        </p>
                    </div>
                </div>
            </div>
            ${addQuestion()}



        </div>
        <div class="buttons is-centered container">
                <button type="button" id="addQuestion" class="button is-primary">Add Question</button>
            </div>
        <div class="container buttons is-centered">
            <div class="field is-horizontal">
                <div class="field-label">
                    <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                    <div class="field is-grouped">
                        <div class="control">
                            <button type="submit" id="submit" class="button is-link">Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    `;


    return quizDiv;
}

function addQuestion() {
    const question = `
    <div class="container question">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Question</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" name="question" placeholder="Please eneter your question...">
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
                        <input class="input" type="text" name="A" placeholder="Enter a possible answer">
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
                        <input class="input" type="text" name="B" placeholder="Enter a possible answer">
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
                        <input class="input" type="text" name="C" placeholder="Enter a possible answer">
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
                        <input class="input" type="text" name="D" placeholder="Enter a possible answer">
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
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>                             
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return question;
}
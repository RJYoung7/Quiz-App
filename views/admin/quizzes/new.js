const layout = require('../../layout');
const { addQuestion } = require('../../quizzes/question');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {

    // let numQuestions = 1;
    return layout({
        content: `
        <section>
            <form method="POST" action="/new">
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
                                    <input required class="input" type="text" name="name" placeholder="Name of quiz....">
                                </div>
                                <p class="help is-danger">
                                    ${getError(errors, 'name')}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="buttons is-centered container">
                    <input type="hidden" name="numQuestions" id="numQuestionsValue" value="0">
                    <p>Number of questions: <span id="numQuestionsText">0</span> </p>
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
        <section>
        <script src="/new.js"></script>
        <script src="/index.js"></script>
        `
    });
}
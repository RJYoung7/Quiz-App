const question = require('./question');
let Question = question.Question;

class Quiz {
    questions = [];
    constructor(name) {
        this.name = name;
    }

    addQuestions({ question, A, B, C, D, answer }) {
        console.log(question.length);
        const length = question.length;
        for (let i = 0; i < length; i++) {
            let quest = new Question(question[i], A[i], B[i], C[i], D[i], answer[i]);

            this.questions.push(quest);
        }
    }
}



module.exports = {
    Quiz: Quiz
};
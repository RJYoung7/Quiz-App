const question = require('./question');
let Question = question.Question;

class Quiz {
    constructor({ name, numQuestions, ...questions }) {
        // console.log(name, questions);
        this.name = name;
        this.questions = this.addQuestions(questions);
        this.numberOfQuestion = numQuestions;
    }

    addQuestions(questions) {
        const questionArr = [];
        const { question, a, b, c, d, answer } = questions;
        // console.log(questions);
        // console.log(question, a, b, c, d, answer);
        // console.log(Array.isArray(question));
        if (Array.isArray(question)) {
            // console.log("else");
            for (let i = 0; i < question.length; i++) {
                questionArr.push(new Question(question[i], a[i], b[i], c[i], d[i], answer[i]));
            }
        }

        if (!Array.isArray(question) && JSON.stringify(questions) !== JSON.stringify({})) {
            // console.log('elseif');
            questionArr.push(new Question(question, a, b, c, d, answer));
        }
        return questionArr;

        // try {
        //     for (let item in questions) {
        //         console.log(item);
        //         console.log(question, a, b, c, d, answer);
        //         questionArr.push(new Question(question, a, b, c, d, answer));
        //     }

        // } catch (err) {
        //     throw new Error(err);
        // }

    }

    // addQuestions({ question, A, B, C, D, answer, numQuestions }) {
    //     for (let i = 0; i < numQuestions; i++) {
    //         let quest = new Question(question[i], A[i], B[i], C[i], D[i], answer[i]);
    //         this.questions.push(quest);
    //     }
    // }
}

module.exports = {
    Quiz: Quiz
};
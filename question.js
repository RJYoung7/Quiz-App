class Question {
    question = "";
    possibleAnswers = [{
            id: "A",
            answer: ""
        },
        {
            id: "B",
            answer: ""
        },
        {
            id: "C",
            answer: ""
        },
        {
            id: "D",
            answer: ""
        }
    ];
    answerId = "";
    constructor(question, A, B, C, D, answer) {
        this.question = question;
        this.possibleAnswers[0].answer = A;
        this.possibleAnswers[1].answer = B;
        this.possibleAnswers[2].answer = C
        this.possibleAnswers[3].answer = D;
        this.answerId = answer;
    }
}
module.exports = {
    Question: Question
}
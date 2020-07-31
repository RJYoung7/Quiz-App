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

    setQuestion(question) {
        this.question = question;
    }

    setPossibleAnswer(id, possibleAnswer) {
        id = id.toUpperCase();
        for (let posAns of this.possibleAnswer) {
            if (posAns.id === id) {
                posAns.answer = possibleAnswer;
            }
        }
    }

    setAnswer(answerId) {
        this.answerId = answerId;
    }
}
module.exports = {
    Question: Question
}
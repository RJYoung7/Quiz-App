module.exports = ({ content }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Quiz App</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css">
            <link rel="stylesheet" href="/css/main.css">


        </head>

        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/admin/quizzes">
                        QuizApp
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a id="myQuizzes" class="navbar-item" href="/">
                            Quizzes
                        </a>
                        <a id="myResults" class="navbar-item" href="/results">
                            Results
                        </a>

                        

                    </div>
                </div>
            </nav>
            ${content}

        </body>


    </html>
    `;

};

{
    /* <a id="newQuiz" class="navbar-item" href="/new">
                                Create Quiz
                            </a> */
}
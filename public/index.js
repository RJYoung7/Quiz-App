// Populates hamburger
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});



// // Create new quiz content
// const createNewQuiz = document.getElementById('newQuiz');

// createNewQuiz.addEventListener('click', () => {

//     // Select the section element in the DOM
//     const section = document.querySelector('section');

//     // Number of questions
//     let numQuestions = 1;

//     // Change content in section to newQuiz
//     section.innerHTML = newQuizForm(numQuestions);

//     const addQuestionBtn = document.getElementById('addQuestion');

//     addQuestionBtn.addEventListener('click', function() {
//         const quizDiv = document.getElementById('quizDiv');
//         const div = document.createElement('div');
//         div.innerHTML = addQuestion();
//         quizDiv.appendChild(div);
//         numQuestions++;
//         const numberOfQuestionsText = document.getElementById('numQuestionsText');
//         const numberOfQuestionsValue = document.getElementById('numQuestionsValue');
//         numberOfQuestionsText.innerText = `${numQuestions}`;
//         numberOfQuestionsValue.value = numQuestions;
//         console.dir(numberOfQuestionsText);
//         console.dir(numberOfQuestionsValue);

//     });
// });
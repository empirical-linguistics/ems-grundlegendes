var quiz = new Quiz('quiz-div', ['a', ['b', 'c', 'd']]);

function myAnswerCheckMethod() {
    // checkAnswers returns true if all questions have been answered and updates the result object
    if (quiz.checkAnswers()) {
        console.log('Correct answers: ' + quiz.result.score + '/' + quiz.result.totalQuestions);
        console.log('Percent correct: ' + quiz.result.scorePercentFormatted + '%');
    }
        
    // Alternatively, we can ignore unanswered questions by passing false
    quiz.checkAnswers(false);
    console.log('Correct answers: ' + quiz.result.score + '/' + quiz.result.totalQuestions);
    console.log('Percent correct: ' + quiz.result.scorePercentFormatted + '%');

    // We can also use the highResults method to highlight correct and incorrect answers.
    // We pass a callback which takes the quiz object, the current question, the question number and whether it was answered correctly.
    quiz.highlightResults(myHandleAnswerMethod);
}

// Callback for quiz.highlightResults called for each question. Parameters are: The quiz object the question belongs to,
// the question element, the question number and a boolean indicating if the question was answered correctly.
function myHandleAnswerMethod(quiz, question, no, correct) {
    if (!correct) {
        // Highlight the correct answers.
        // See the example code on GitHub for an example implementation.
    }
}
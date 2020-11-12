function generateStartScreenHtml() {
  return `
    <div class="start-screen">
      <p>This quiz will assess your basic knowledge of Real Estate.</p>
      <button type="button" id="start">Start Quiz</button>
    </div>
  `;
}

function generateQuestionHtml() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  return `
    <form id="question-form" class="question-form">
      <legend class="question-and-score">${STORE.currentQuestion + 1}/${STORE.questions.length} questions<br>${STORE.score}/${STORE.questions.length} correct</legend>
      <fieldset>
        <div class="question">
          <legend class="question-legend">${currentQuestion.question}</legend>
        </div>
        <div class="options">
          <div id="option-container-0">
            <span><input type="radio" name="options" id="option1" value= "${currentQuestion.answers[0]}" tabindex ="1" required><label for="option1">${currentQuestion.answers[0]}</label></span>
          </div>
          <div id="option-container-1">
            <span><input type="radio" name="options" id="option2" value= "${currentQuestion.answers[1]}" tabindex ="2" required><label for="option2">${currentQuestion.answers[1]}</label></span>
          </div>
          <div id="option-container-2">
            <span><input type="radio" name="options" id="option3" value= "${currentQuestion.answers[2]}" tabindex ="3" required><label for="option3">${currentQuestion.answers[2]}</label></span>
          </div>
          <div id="option-container-3">
            <span><input type="radio" name="options" id="option4" value= "${currentQuestion.answers[3]}" tabindex ="4" required><label for="option4">${currentQuestion.answers[3]}</label></span>
          </div>
        </div>
        <button type="submit" id="submit-answer-btn" tabindex="5">Submit</button>
        <button type="button" id="next-question-btn" tabindex="6"> Next &gt;></button>
      </fieldset>
    </form>
  `;
}


function generateResultsScreen() {
  return `
    <div class="results">
      <form>
        <fieldset>
          <div>
            <div>
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
            </div>
          </div>
        
          <div>
            <div>
              <button type="button" id="restart"> Restart Quiz </button>
            </div>
          </div>
        </fieldset>
    </form>
    </div>
  `;
}


function generateFeedbackHTML(answerStatus) {
  let correctAnswer = STORE.questions[STORE.currentQuestion].correctAnswer;
  let html = '';
  if (answerStatus === 'correct') {
    html = `
    <div class="right-answer">That is correct!</div>
    `;
  }
  else if (answerStatus === 'incorrect') {
    html = `
      <div class="wrong-answer">That is incorrect. The correct answer is ${correctAnswer}.</div>
    `;
  }
  return html;
}


function render() {
  let html = '';

  if (STORE.quizStarted === false) {
    $('main').html(generateStartScreenHtml());
    return;
  }
  else if (STORE.currentQuestion >= 0 && STORE.currentQuestion < STORE.questions.length) {
    html = generateQuestionHtml();
    $('main').html(html);
  }
  else {
    $('main').html(generateResultsScreen());
  }
}

function handleStartClick() {
  $('main').on('click', '#start', function (event) {
    STORE.quizStarted = true;
    render();
  });
}

function handleNextQuestionClick() {
  $('body').on('click', '#next-question-btn', (event) => {
    render();
  });
}

function handleQuestionFormSubmission() {
  $('body').on('submit', '#question-form', function (event) {
    event.preventDefault();
    const currentQuestion = STORE.questions[STORE.currentQuestion];

    let selectedOption = $('input[name=options]:checked').val();
    let optionContainerId = `#option-container-${currentQuestion.answers.findIndex(i => i === selectedOption)}`;

    if (selectedOption === currentQuestion.correctAnswer) {
      STORE.score++;
      $(optionContainerId).append(generateFeedbackHTML('correct'));
    }
    else {
      $(optionContainerId).append(generateFeedbackHTML('incorrect'));
    }
    STORE.currentQuestion++;
    $('#submit-answer-btn').hide();
    $('input[type=radio]').each(() => {
      $('input[type=radio]').attr('disabled', true);
    });
    $('#next-question-btn').show();

  });
}


function restartQuiz() {
  STORE.quizStarted = false;
  STORE.currentQuestion = 0;
  STORE.score = 0;
}

function handleRestartButtonClick() {
  $('body').on('click', '#restart', () => {
    restartQuiz();
    render();
  });
}

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestionClick();
  handleQuestionFormSubmission();
  handleRestartButtonClick();
}

$(handleQuizApp);
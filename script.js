const AUDIO_SUCCESS = new Audio("./asset/audio/right.mp3");
const AUDIO_FAIL = new Audio("./asset/audio/fail.mp3");

let currentQuestionCat = "html";
let currentQuestionIndex = 0;
let percentProgress = 0;
let correctlyAnswersCounter = 0;
let questionsAmount = questions[currentQuestionCat].length;

function init() {
  renderApp();
}

function renderApp() {
  renderNavBar();
  renderQuestionBody();
}

function renderNavBar() {
  const appHeaderRef = document.getElementById("container-questionHeader");
  appHeaderRef.innerHTML = getNavBarTemplate();
}

function renderQuestionBody() {
  const appBodyRef = document.getElementById("container-questionBody");
  appBodyRef.innerHTML = getQuestionsHtmlString(questions[currentQuestionCat], currentQuestionIndex);
  updateProgressBar();
}

function getQuestionsHtmlString(questionsCat) {
  let questionsHtmlString = "";

  questionsHtmlString += getQuestionsBodyTemplate(questions[currentQuestionCat], currentQuestionIndex);

  return questionsHtmlString;
}

function showQuestion() {
  updateProgressBar();
  const currentQuestion = questions[currentQuestionCat][currentQuestionIndex];
  setQuestion(currentQuestion);
  setAnswers(currentQuestion);
}

function setQuestion(currentQuestion) {
  const questionRef = document.getElementById("question");
  questionRef.innerHTML = currentQuestion.question;
}

function setAnswers(currentQuestion) {
  const currentQuestionArray = Object.entries(currentQuestion);

  for (let indexQuestion = 1; indexQuestion < currentQuestionArray.length - 1; indexQuestion++) {
    const answerRef = document.getElementById("answer" + indexQuestion);
    const answer = currentQuestion["answer-" + indexQuestion];
    answerRef.innerText = answer;
  }
}

function showQuizResult() {
  const appBodyRef = document.getElementById("container-questionBody");
  const questionContainerRef = document.getElementById("container-question");
  questionContainerRef.style = "display: none;";
  appBodyRef.innerHTML += getResultTemplate(currentQuestionCat.toUpperCase(), correctlyAnswersCounter, questionsAmount);
  correctlyAnswersCounter = 0;
}

function nextQuestion() {
  if (currentQuestionIndex < 3) {
    currentQuestionIndex++;
    cleanAnswerContainerBackground();
    showQuestion();
    updateQuestionFooter();
    toggleEnableNextButton();
  } else {
    toggleEnableNextButton();
    showQuizResult();
    return;
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    cleanAnswerContainerBackground();
    showQuestion();
    updateQuestionFooter();
  } else {
    cleanAnswerContainerBackground();
    return;
  }
}

function updateQuestionFooter() {
  const currentQuestionRef = document.getElementById("currentQuestion");
  currentQuestionRef.innerText = currentQuestionIndex + 1 + ".";
}

function updateProgressBar() {
  const progressBarRef = document.getElementById("progress-bar");
  percentProgress = ((currentQuestionIndex + 1) / questions[currentQuestionCat].length) * 100;
  progressBarRef.style = `width: ${percentProgress}%`;
}

function restartGame() {
  resetVariables();
  renderQuestionBody();
}

function handleAnswer(answerIndex) {
  const isAnswerCorrectly = checkAnswer(answerIndex);
  showAnswerResult(answerIndex, isAnswerCorrectly);
  disableAnswers();
  toggleEnableNextButton();
}

function checkAnswer(answerIndex) {
  const correctlyAnswerIndex = getCorrectlyAnswerIndex();

  if (answerIndex === correctlyAnswerIndex) {
    correctlyAnswersCounter++;
    return true;
  } else {
    return false;
  }
}

function showAnswerResult(answerIndex, isAnswerCorrectly) {
  const containerAnswerRef = document.getElementById("container-answer" + answerIndex);
  if (isAnswerCorrectly === true) {
    containerAnswerRef.classList.add("bg-success");
    AUDIO_SUCCESS.play();
  } else {
    const correctlyAnswerIndex = getCorrectlyAnswerIndex();
    const containerCorrectlyAnswerRef = document.getElementById("container-answer" + correctlyAnswerIndex);

    containerAnswerRef.classList.add("bg-danger");
    containerCorrectlyAnswerRef.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
}

function cleanAnswerContainerBackground() {
  const answerContainers = document.querySelectorAll(".container-answer");

  answerContainers.forEach((container) => {
    container.classList.remove("bg-success");
    container.classList.remove("bg-danger");
  });
}

function toggleEnableNextButton() {
  const btnRef = document.getElementById("next-Button");

  btnRef.toggleAttribute("disabled");
}

function disableAnswers() {
  const answerContainers = document.querySelectorAll(".container-answer");

  answerContainers.forEach((container) => {
    container.setAttribute("disabled", true);
  });
}

function getCorrectlyAnswerIndex() {
  return questions[currentQuestionCat][currentQuestionIndex]["answer-correkt"];
}

function resetVariables() {
  currentQuestionIndex = 0;
  percentProgress = 0;
  correctlyAnswersCounter = 0;
}

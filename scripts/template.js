function getNavBarTemplate() {
  return `<div id="Logo" class="container-fluid d-flex justify-content-center">
        <a class="navbar-brand d-flex justify-content-center m-0" href="#">
          <img src="./asset/logo.png" alt="Logo" class="img-fluid d-inline-block align-text-top w-75" />
        </a>
      </div>
      <div class="container-fluid px-0">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link py-0 ps-4 my-2 text-light" href="#">
              HTML
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 ps-4 my-2 text-light" href="#">
              CSS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 ps-4 my-2 text-light" href="#">
              JS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 ps-4 my-2 text-light" href="#">
              Java
            </a>
          </li>
        </ul>
      </div>`;
}

function getQuestionsBodyTemplate(questionsCat, currentQuestionIndex) {
  return `<div id="container-question" class="card rounded-start-0 bg-light h-100 width-32">
      <div class="card-body">
        <h5 id="question" class="card-title text-center">${questionsCat[currentQuestionIndex].question}</h5>
        <div id="container-answer1" class="card mb-4 container-answer border-0" onclick="handleAnswer(1)">
          <div class="card-body d-flex gap-3">
            <div class="answer-badge">
              <b>A</b>
            </div>
            <div id="answer1">${questionsCat[currentQuestionIndex]["answer-1"]}</div>
          </div>
        </div>
        <div id="container-answer2" class="card mb-4 container-answer border-0" onclick="handleAnswer(2)">
          <div class="card-body d-flex gap-3">
            <div class="answer-badge">
              <b>B</b>
            </div>
            <div id="answer2">${questionsCat[currentQuestionIndex]["answer-2"]}</div>
          </div>
        </div>
        <div id="container-answer3" class="card mb-4 container-answer border-0" onclick="handleAnswer(3)">
          <div class="card-body d-flex gap-3">
            <div class="answer-badge">
              <b>C</b>
            </div>
            <div id="answer3">${questionsCat[currentQuestionIndex]["answer-3"]}</div>
          </div>
        </div>
        <div id="container-answer4" class="card mb-4 container-answer border-0" onclick="handleAnswer(4)">
          <div class="card-body d-flex gap-3">
            <div class="answer-badge">
              <b>D</b>
            </div>
            <div id="answer4">${questionsCat[currentQuestionIndex]["answer-4"]}</div>
          </div>
        </div>
      </div>
      ${getQuestionsFooterTemplate(questionsCat, currentQuestionIndex)}
    </div>`;
}

function getQuestionsFooterTemplate(questionsCat, currentQuestionIndex) {
  return `<footer class="container-fluid d-flex justify-content-center pb-3">
          <button type="button" class="btn btn-primary rounded-pill" onclick="previousQuestion()"><b><</b></button>
          <div class="container-fluid d-flex justify-content-center align-items-center gap-2">
            <b id="currentQuestion">${currentQuestionIndex + 1}.</b> von <b id="categorie-question-amount">${questionsCat.length}</b> Fragen
          </div>
          <button id="next-Button" type="button" class="btn btn-primary rounded-pill" onclick="nextQuestion()" disabled><b>></b></button>
        </footer>`;
}

function getResultTemplate(questionsCat, correctlyAnswers, questionsAmount) {
  return (
    // `<div id="container-result" class="container-fluid d-flex flex-column justify-content-center align-items-center bg-light h-100 width-20">
    `<div id="container-result" class="card justify-content-between align-items-center py-4 gap-5 rounded-start-0 bg-light h-100 width-20">
      <div class="container-fluid d-flex flex-column align-items-center gap-2">
        <img src="./asset/brain-result.png" alt="..." class="img-fluid d-inline-block align-text-top w-25" />
        <div class="container-fluid d-flex flex-column align-items-center">
          <b>Complete</b>
          <b>${questionsCat} Quiz</b>
        </div>
      </div>
      <div class="container-fluid d-flex justify-content-center align-items-center gap-3">
        <p class="m-0 color-orange"><b>Your Score</b></p>
        <p class="m-0"><b>${correctlyAnswers}/${questionsAmount}</b></p>
      </div>
      <button type="button" class="btn btn-primary btn-primary-share" onclick="restartGame()">Restart</button>
    </div>`
  );
}

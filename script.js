function init() {
  renderApp();
}

function renderApp() {
  const containerAppRef = document.getElementById("container-quizapp");

  renderNavBar(containerAppRef);
  renderQuestionBody(containerAppRef)
}

function renderNavBar(containerAppRef) {
containerAppRef.innerHTML = getNavBarTemplate();
}

function renderQuestionBody(containerAppRef) {
containerAppRef.innerHTML += getQuestionsHtmlString(questions.html);
}

function getQuestionsHtmlString(questionsCat) {
  let questionsHtmlString = "";

  questionsHtmlString += getQuestionsBodyTemplate(questionsCat);

  return questionsHtmlString;
}
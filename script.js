function init() {
  renderApp();
}

function renderApp() {
  const containerAppRef = document.getElementById("container-quizapp");

  containerAppRef.innerHTML = getNavBarTemplate();
  containerAppRef.innerHTML += getQuestionsHtmlString();
}

function getQuestionsHtmlString() {
  let questionsHtmlString = "";

  questionsHtmlString += getQuestionsBodyTemplate();

  return questionsHtmlString;
}
function getNavBarTemplate() {
  return `<nav class="navbar d-flex w-25 bg-custom rounded-start">
      <div id="Logo" class="container-fluid d-flex justify-content-center">
        <a class="navbar-brand d-flex justify-content-center m-0" href="#">
          <img src="./asset/logo.png" alt="Logo" class="img-fluid d-inline-block align-text-top w-75" />
        </a>
      </div>
      <div class="container-fluid px-0">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link py-0 ps-lg-5 ps-md-4 ps-sm-3 my-2 text-light" href="#">
              HTML
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 ps-lg-5 ps-md-4 ps-sm-3 my-2 text-light" href="#">
              CSS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 ps-lg-5 ps-md-4 ps-sm-3 my-2 text-light" href="#">
              JS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 ps-lg-5 ps-md-4 ps-sm-3 my-2 text-light" href="#">
              Java
            </a>
          </li>
        </ul>
      </div>
    </nav>`;
}

function getQuestionsBodyTemplate() {
  return (
    `<div class="card rounded-start-0" style="width: 25rem">
      <div class="card-body">
        <h5 class="card-title text-center">Frage</h5>
        <div class="card mb-4">
          <div class="card-body d-flex gap-3">
            <div class="answer-badge">
              <b>A</b>
            </div>
            <div>Antwort</div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body d-flex gap-3">
            <div class="answer-badge">
              <b>B</b>
            </div>
            <div>Antwort</div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body d-flex gap-3">
            <div class="answer-badge">
              <b>C</b>
            </div>
            <div>Antwort</div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body d-flex gap-3">
            <div class="answer-badge">
              <b>D</b>
            </div>
            <div>Antwort</div>
          </div>
        </div>
      </div>
      ${getQuestionsFooterTemplate()}
    </div>`
  );
}

function getQuestionsFooterTemplate() {
  return `<footer class="container-fluid d-flex justify-content-center pb-3">
          <button type="button" class="btn btn-primary rounded-pill"><b><</b></button>
          <div class="container-fluid d-flex justify-content-around align-items-center">
            <b>1.</b> von <b>5</b> Fragen
          </div>
          <button type="button" class="btn btn-primary rounded-pill"><b>></b></button>
        </footer>`;
}

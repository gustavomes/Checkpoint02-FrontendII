//Capturando as variáveis que serão manipuladas
const darkmode = document.getElementById('darkbtn')

// dark mode

function darkMode() {
    var body = document.querySelector("body");
    var header = document.querySelector("header");
    var tarefa = document.querySelector(".nova-tarefa");
    var tituloCon = document.querySelector(".titulo-concluida");
    var duasTarefas = document.querySelector(".duasTarefas");
    var logo = document.querySelector("#logo");
    var darkbtn = document.querySelector("#darkbtn");

    body.classList.toggle("body-dark-mode");
    header.classList.toggle("header-dark-mode");
    tarefa.classList.toggle("nova-tarefa-dark-mode");
    tituloCon.classList.toggle("titulo-concluida-dark-mode");
    duasTarefas.classList.toggle("duasTarefas-dark-mode");
    logo.classList.toggle("logo-dark-mode");
    darkbtn.classList.toggle("darkbtn-dark-mode");

  }

    darkmode.addEventListener('click', function (event) {
        darkMode();
    });




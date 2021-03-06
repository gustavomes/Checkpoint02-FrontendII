//Capturando as variáveis que serão manipuladas
const btnAddTarefa = document.getElementById('adicionar-tarefa');
const inputText = document.getElementById('nova-tarefa');
const tarefasPendentes = document.querySelector('.tarefas-pendentes');
const tarefasConcluidas = document.querySelector('.tarefas-concluidas');
const data = document.getElementById('dataFinal');
const darkmode = document.querySelector('#darkbtn')


//calendário e data limite
let dataIni = document.getElementById('dataInicial');
let data2 = new Date();
let dia = data2.getDate();
let mes = data2.getMonth() + 1;
let ano = data2.getFullYear();
if(dia<10){
    dia='0'+dia
  } 
  if(mes<10){
    mes='0'+mes
  } 
let dataCorrente = dia + "/" + mes + "/" + ano;
console.log(dataCorrente);
dataIni.innerText = `Data: ${dataCorrente}`;
today = ano+'-'+mes+'-'+dia;
document.getElementById("dataFinal").setAttribute("min", today);



//Define o indice da tarefa
let contador = 1;

//Criando o card que será exibido - Recebe o elemento pai (tarefasPendentes)
let criaCard = (elementoPai) => {

    if (inputText.value.length < 11) {
        alert('Digite uma tarefa com no mínimo 10 caracteres');

    } else if (data.value == '') {
            alert('Insira uma data final');
    } else {
    elementoPai.innerHTML += `<li class="tarefa">
                                       
                                        <div class="not-done"></div>
                                        <div class="descripcion">
                                            <p class="nome"> ${contador} - Tarefa: ${inputText.value} - Início: ${dataCorrente} - Término: ${new Date(data.value).toLocaleDateString("pt-BR", {timeZone: 'UTC'})}</p>
                                            <img class="excluir" src="assets/trash_icon.png" alt="Remover tarefa">
                                         </div>

                                </li>`;

   
    contador++;

}
}

//adiciona a função de criar o card ao botão '+'
btnAddTarefa.addEventListener('click', function (evt) {

    //impede de atualizar a página
    evt.preventDefault();

    //Chama a função que cria o card em tela
    criaCard(tarefasPendentes);

    //Limpando o campo de texto após salvar
    inputText.value = "";

});

// evento para remover elemento de uma div e inserir em outra 
// O evento acontece nessa lista, não no botão de submit
tarefasPendentes.addEventListener('click', function (event) {

    //seleciona e armazena o elemento pai (div tarefa) para que possamos realoca-la
    let tarefa = event.target.parentNode;

    //se alvo do evento for elemento de classe 'not-done'
    //Ou seja, se <tarefa> é marcada como NOT-DONE, a condição é verdadeira
    if (event.target.classList.contains('not-done')) {

        //remove a div tarefa de 'tarefasPendentes'
        tarefa.parentNode.removeChild(tarefa);

        //realoca de acordo com o novo pai selecionado
        tarefasConcluidas.appendChild(tarefa)
    }

    /* Capturamos o item <tarefa> que foi clicado no icone de deletar */
    if (event.target.classList.contains('excluir')) {

        //Verificação de segurança
        let apagaTarefa = confirm("Deseja apagar esta tarefa ?");
        if (apagaTarefa) {

            //Definimos o carte <item> que será removido
            tarefa = tarefa.parentNode;

            //Removemos o card <item> da lista de 'tarefasPendentes'
            tarefa.parentNode.removeChild(tarefa);
        }
    }
});

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




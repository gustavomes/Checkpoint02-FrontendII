//querySelector's

let desc = document.getElementById('pendentes');
let botao = document.getElementById("btn");
let sec = document.getElementById('columm');

//input com data corrente
let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
let dataCorrente = dia + "/" + mes + "/" + ano;

console.log(dataCorrente);


//Evento Botão

botao.addEventListener('click', (event) => {

// impede que o evento padrão aconteça (no caso do form, não envia para um backend)
  event.preventDefault(); 
  
/*   let rota;
  for (let i = 0; i < rotas.length; i++) {
    if (rotas[i].checked) {
      rota = rotas[i].value;
      break;
    }
  } */

/*   let condTxt;
  cond.checked ? condTxt = 'pode mundar de rota' : condTxt = 'nunca muda de rota';
 */
  
  
  //Criação dos Elementos

  let p1 = document.createElement('p');
  p1.innerText = `Tarefa: ${descricao.value} -- Data Incial: ${dataCorrente} -- Data Final: ${dataFinal.value}`;

  //localização dos elementos
  
  desc.appendChild(p1);

})



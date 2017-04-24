// 1- Pegar o botão

var botao = document.querySelector(".assine");
// 2- Criar a função que chama o alert
// function entrarEmail(){
// 	alert("Cadastro concluido com sucesso");

// opção para fazer uma inbox após clicar o botão
function entrarEmail(){
var chamada = document.querySelector(".mensagem");
chamada.className = "mensagem ativo";
};

// 3- Linkar a função com o evento ao clicar

botao.onclick = entrarEmail;




//criar o hamburguer menu 


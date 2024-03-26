window.alert("Boas vindas ao nosso site!");
let nome="Lua";
let idade=25;
let numeroDeVendas=50;
let saldoDisponivel=1000;
window.alert("Erro! Peencha todos os campos");
let mensagemDeErro="Erro! Preencha todos os campos";
window.alert(mensagemDeErro);
nome=window.prompt("Qual é o seu nome?");
idade=window.prompt("Digite sua idade:");
if(idade>18){
    window.alert("Pode tirar a habilitação!");
};
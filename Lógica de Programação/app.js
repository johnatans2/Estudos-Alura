//Declaração de Variáveis
let limiteNumeroSecreto=100;
let numeroSecreto=parseInt(Math.random()*limiteNumeroSecreto+1);
let palpite;
//Processamento de Dados e Input
do{
    window.alert("Olá, seja muito bem vindo ao jogo do número secreto!");
    palpite=parseInt(window.prompt("Digite um número entre 1 e "+limiteNumeroSecreto));
    if(palpite>numeroSecreto){
        window.alert("Quase lá! Tente um número menor");
    }else if(palpite<numeroSecreto){
        window.alert("Poxa, não foi desta vez... tente um número maior");
    }
}while(palpite!=numeroSecreto);
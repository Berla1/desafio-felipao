// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze   
// Se XP for entre 2.001 e 6.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"
const nome = "Torvald"
const nivel = 6000
let nivelPersonagem = ""

if (nivel < 1001 && nivel > 0) {
    nivelPersonagem = "Ferro";
}
else if(nivel >= 1001 && nivel <= 2000){
    nivelPersonagem = "Bronze"
}
else if(nivel >= 2001 && nivel <= 6000){
    nivelPersonagem = "Prata"
}
else if(nivel >= 6001 && nivel <= 7000 ){
    nivelPersonagem = "Ouro"
}
else if(nivel >= 7001 && nivel <= 8000){
    nivelPersonagem = "Platina"
}
else if(nivel >= 8001 && nivel <= 9000){
    nivelPersonagem = "Ascendente"
}
else if (nivel >= 9001 && nivel <= 10000){
    nivelPersonagem = "Imortal"
}
else if(nivel >= 10001){
    nivelPersonagem = "Radiante"
}
console.log("O Herói de nome " + nome, "e está no nível de " + nivelPersonagem)
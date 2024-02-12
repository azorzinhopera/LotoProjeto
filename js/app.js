var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

//Função para aparecer texto na tela
function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}
exibirNaTela('h2', '')

function sortearNumeros(lista) {
    var numerosSorteados = [];
    
    while (numerosSorteados.length < 14) {
        // Sorteia um índice aleatório da lista
        var indiceSorteado = Math.floor(Math.random() * lista.length);
        
        // Verifica se o número já foi sorteado
        if (!numerosSorteados.includes(lista[indiceSorteado])) {
            // Adiciona o número sorteado à lista de números sorteados
            numerosSorteados.push(lista[indiceSorteado]);
        }
    }

    return numerosSorteados;
}

function sortearNumeros2(lista2) {
    var numerosSorteados2 = [];

    while (numerosSorteados2.length < 15) {
        //Sorteia um índice aleatório da lista
        var indiceSorteado2 = Math.floor(Math.random() * lista2.length);

        //verificar se o número já foi sorteado
        if (!numerosSorteados2.includes(lista2[indiceSorteado2])) {
            //Adiciona o número sorteado á lista de números sorteados
            numerosSorteados2.push(lista2[indiceSorteado2]);
        }
    }

    return numerosSorteados2
}

var numerosSorteados = sortearNumeros(numeros);
var numerosSorteados2 = sortearNumeros2(numeros);

function gerarNumero14() {
    exibirNaTela('h2', `Os 14 números para você jogar essa semana são ${numerosSorteados}`)
}

function gerarNumero15() {
    exibirNaTela('h2', `Os 15 números para você jogar essa semana são ${numerosSorteados2}`)
}

function reiniciar() {
    exibirNaTela('h2', 'Escolha qual jogo você quer ter acesso hoje! ')
}

function limparTela() {
    exibirNaTela('h2', '')
}

let numerosMega = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 
    59, 60]


function sortearNumeros3(lista3){

        var numerosSorteados3 = []

       while (numerosSorteados3.length < 6) {
        var indiceSorteado3 = Math.floor(Math.random() * lista3.length);

        if (!numerosSorteados3.includes (lista3[indiceSorteado3])) {
            numerosSorteados3.push(lista3[indiceSorteado3]);

        }

    }
    return numerosSorteados3
}

var numerosSorteados3 = sortearNumeros3(numerosMega)

function gerarMega() {
    exibirNaTela(`h3`, `Os Números são ${numerosSorteados3}`)
}

function reiniciar2() {
    exibirNaTela(`h3`, `Pode escolher um novo jogo para realizar`)
}

function limparTela2() {
    exibirNaTela('h3', '')
}
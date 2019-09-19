// Associando variáveis a elementos do HTML.
const $numeros = document.getElementById("numeros");
const $pares = document.getElementById("pares");
const $quadrado = document.getElementById("quadrado");
const $unico = document.getElementById("unico");
const $mostrar = document.getElementById("btnMostrar");

// Função que verifica se um número é par.
const numeroPar = (num) => num % 2 == 0;

// Função que eleva um número fornecido ao quadrado.
const  aoQuadrado = (num) => num * num;

// Função que cria números aleatórios entre 0 e 20 e os retorna como array.
const numerosAleatorios = () => {
    let arrayNumerosAleatorios = [];
    let numeroAleatorio = 0;

    for (let i = 1; i <= 30; i++) {
        numeroAleatorio = Math.floor(Math.random() * 20 + 1);   // Armazenando um número aleatório na variável.
        arrayNumerosAleatorios.push(numeroAleatorio);    // Armazenando este número na array.
    }

    return arrayNumerosAleatorios;
    
}

// Função que armazena apenas os valores pares de uma array fornecida.
const numerosPares = (array) => {
    let arrayNumerosPares = array.filter(numeroPar);
    return arrayNumerosPares
}

// Função que eleva todos os elementos de uma array fornecida ao quadrado.
const arrayAoQuadrado = (array) => {
    let arrayAoQuadrado = array.map(aoQuadrado);
    return arrayAoQuadrado;
}

// Função que coleta os elementos únicos em uma array fornecida.
const elementosUnicos = (array) => {

    let tamanhoArray = array.length;
    let testandoElemento = 0;
    let elementoUnico = false;
    let arrayElementosUnicos = [];

    // Este laço pega cada número da array, para que este seja testado.
    for(let i = 0; i < tamanhoArray; i++) {

        testandoElemento = array[i]; // Variável recebendo cada valor da array

        // Laço que compara o valor com cada elemento da array.
        for(let j = 0; j < tamanhoArray; j++) {

            if (i != j) {   // Certificando-se de que o valor não esteja sendo testado com ele mesmo.

                if (testandoElemento == array[j]) { // Se o elemento for igual a algum outro, cai neste if
                    elementoUnico = false;
                    break;
                } else {    // Se os elementos não forem iguais, cai neste else.
                    elementoUnico = true;
                }

            }

        }

        // Se o elemento não tiver sido igual a nenhum outro, este if se executa e o valor é adicionado a Array de valores únicos.
        if (elementoUnico) {
            arrayElementosUnicos.push(testandoElemento);
        }

    }

    return arrayElementosUnicos;
  
}

// Função que transforma uma array em uma String.
const paraString = (array) => {
    let tamanhoArray = array.length
    let acumulaString = "";

    for (let i = 0; i < tamanhoArray; i++) {
        acumulaString += array[i] + "\n";
    }

    return acumulaString;

}

const mostrarNaTela = (printar) => {
    const array = printar;

    $numeros.value = paraString(array);
    $pares.value = paraString(numerosPares(array));
    $quadrado.value = paraString(arrayAoQuadrado(array));
    $unico.value = paraString(elementosUnicos(array));
}
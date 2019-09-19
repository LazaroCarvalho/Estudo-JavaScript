const $container = document.getElementById("container");

// Retorna um número aleatório gerado.
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) ) + min;
}

// Gera uma array de números aleatórios a partir da função numeroAleatorio.
const gerarNumeros = () => {
    let numeros = [];
    for (let i = 0; i < 30; i++) {
        numeros.push(numeroAleatorio(1,20));
    }
    return numeros;
}

// Gera Elementos HTML com as informações fornecidas.
const gerarCards = ( arr, header, title ) => {
    let html = `
    <div class='card'>
        <div class='card-header bg-dark text-white'>${header}</div>
        <div class='card-body bg-dark text-white'>
            <h5 class='card-title'> ${title} </h5>
            <p class='card-text'>${arr.join(" ")} </p>
        </div>
    </div>`

    return html;
}



const ePar = num => num % 2 == 0;   // Verifica se um número é par.
const quadrado = num => num * num;  // Eleve um número ao quadrado.

/* Recebe o elemento e sua array. Filtra esta array, verificando
   se algum elemento dela é igual ao elemento passado como parâmetro */
const eUnico = (elemento, indice, array) => {
    let quantidade = array.filter ( num => num == elemento).length;
    return quantidade == 1;
}

const arrayUnicos = ( arr ) => arr.filter(eUnico);

const filtrarPar = array => array.filter(ePar); // Retorna apenas os valores pares de uma array.
const arrayQuadrado = array => array.map(quadrado); // Eleva todos os elementos de uma array ao quadrado.

const numeros = gerarNumeros();
const numerosPares = filtrarPar(numeros);
const numerosQuadrado = arrayQuadrado(numeros);
const numerosUnicos = arrayUnicos(numeros);


$container.innerHTML = gerarCards(numeros, "Numeros Aleatórios", "Números");
$container.innerHTML += gerarCards(numerosPares, "Números Pares", "Pares");
$container.innerHTML += gerarCards(numerosQuadrado, "Números ao quadrado", "Elevado a 2");
$container.innerHTML += gerarCards(numerosUnicos, "Elementos Unicos", "Unicos");

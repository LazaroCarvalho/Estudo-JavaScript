// Texto
const $minimo = document.getElementById("minimo");
const $maximo = document.getElementById("maximo");
const $resultado = document.getElementById("resultado");

// Botões
const $pares = document.getElementById("pares");
const $fatorial = document.getElementById("fatorial");
const $fibonacci = document.getElementById("fibonacci");
const $primo = document.getElementById("primo");

// Recebe um valor string e o mostra na tela.
const mostrarNaTela = (valorArray) => {
    let tamanhoDaArray = valorArray.length;
    let resposta = "";
    for(let i = 0; i < tamanhoDaArray; i++) {
        resposta += valorArray[i];
    }
    $resultado.value = resposta;
}

// Função para mostrar os números pares do número mínimo ao máximo inserido pelo usuário
const pares = () => {
    let valorMinimo = $minimo.value * 2;
    let numerosPares = [];
    for (let i = $minimo.value; i <= $maximo.value; i++) {
        numerosPares.push(i + " - " + valorMinimo + "\n");
        valorMinimo += 2;
    }
    mostrarNaTela(numerosPares);
}

const fatorial = () => {
    let resposta = [];
    let resultado = 0;
    for (let i = $minimo.value; i <= $maximo.value; i++) {
        resultado = i;
        for (let j = i - 1; j > 0; j--) {
            resultado *= j;
        }
        resposta.push(i + " - " + resultado + "\n");
    }
    mostrarNaTela(resposta);
}

const fibonacci = () => {
    let n1 = 0;
    let n2 = 1;
    let r = 0;
    let i = 1;
    let resposta = [];

    while(i <= $maximo.value) {
        n1 = n2;
        n2 = r;
        r = n2 + n1;
        if(i >= $minimo.value) {
            resposta.push(i + " - " + r + "\n");
        }
        i++;
    }
    mostrarNaTela(resposta);
}

const primos = () => {
    let numerosPrimos = [];
    let ePrimo = true;
    let quantidadeNumerosPrimos = 0;
    let moduloIporJ = 0;

    for (let i = 2; quantidadeNumerosPrimos < $maximo.value; i++) {
        for (let j = 2; j <= i / 2; j++) {
            moduloIporJ = i % j;
            if (moduloIporJ == 0) {
                ePrimo = false;
                break;
            }
            else {
                ePrimo = true;
            }
        }
        if (ePrimo) {
            quantidadeNumerosPrimos++
            if (quantidadeNumerosPrimos >= $minimo.value) {
                numerosPrimos.push(quantidadeNumerosPrimos + " - " + i + "\n");
            }
        }
    }
    mostrarNaTela(numerosPrimos);
}

// Eventos de botão
$pares.addEventListener("click", pares);
$fatorial.addEventListener("click", fatorial);
$fibonacci.addEventListener("click", fibonacci);
$primo.addEventListener("click", primos);
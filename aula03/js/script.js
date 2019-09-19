const $minimo = document.getElementById("minimo");
const $maximo = document.getElementById("maximo");
const $pares = document.getElementById("pares");
const fatorial = document.getElementById("fatorial");
const fibonacci = document.getElementById("fibonacci");
const primos = document.getElementById("primo");
const $resultado = document.getElementById("resposta");

const ePar = (num) => num % 2 == 0;

const exibir = (array) => $resultado.value = array.join("\n");

const listarPares = () => {
    let contador = 0;
    let num = 1;
    let pares = [];

    while (contador < $maximo.value) {
        if (ePar(num)) {
            contador++;
            if (contador >= $minimo.value) {
                pares.push(contador + " - " + num);
            }
        }
        num++;
    }

    exibir(pares);
}

const calcularFibonacci = () => {
    
}

$pares.addEventListener("click", listarPares);
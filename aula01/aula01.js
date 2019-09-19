/* Declaração
    1º const ( Imutável ) - Escopo local
    2º let  ( Mutável ) - Escopo local
    3º var ( Mutável )  - Escopo Global

    Tipo de funções:
    1)
    function nomeDaFunção (parâmetros){
        códigos;
    }

    2)
    const nomeDaFuncao = function (parâmetros) {
        códigos;
    }

    3)
    const nomeDaFuncao = (parâmetros) => return;
*/

const $num1 = document.getElementById("numero1");
const $num2 = document.getElementById("numero2");
const $somar = document.getElementById("somar");
const $resultado = document.getElementById("resultado");

const soma = () => $resultado.value = parseInt($num1.value) + parseInt($num2.value);

$somar.addEventListener("click", soma);
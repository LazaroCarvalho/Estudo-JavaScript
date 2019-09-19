const $nome = document.getElementById("nome");
const $media = document.getElementById("media");
const $situacao = document.getElementById("situacao");
const $calcular = document.getElementById("calcular");
const $corpo = document.getElementById("corpo")

const situacao = () => {
    if ($media.value < 5) {
        $situacao.value = $nome.value + " foi reprovado!";
        $corpo.style = "background-color: red;";
    } else if ($media.value >= 5) {
        $situacao.value = $nome.value + " foi aprovado!";
        $corpo.style = "background-color: green;";
    }
}

$calcular.addEventListener("click", situacao);
const $img = document.getElementById("img");
const $amarelo = document.getElementById("amarelo");
const $verde = document.getElementById("verde");
const $vermelho = document.getElementById("vermelho");
const $automatico = document.getElementById("automatico");
const $parar = document.getElementById("parar");

let i = 1;

// Muda as cores do semáforo automaticamente.
const ligarAutomaticamente = () => {
    
    if (i == 1) {
        ligarAutomatico("vermelho");
        i++;
    } else if(i == 2) {
        ligarAutomatico("amarelo");
        i++;
    } else {
        ligarAutomatico("verde");
        i = 1;
    }

}

// Repete a mudança de cores várias vezes.
let loop = null;
const ligarLoop = () => loop = setInterval(ligarAutomaticamente, 1000);

// Função que para um loop
const pararLoop = () => clearInterval(loop);

// Função para definir as cores
const ligarAutomatico = (cor) => {
    $img.src = `./img/${cor}.png`;
}

// Define as cores e para o loop
const ligar = cor => { 
    $img.src = `./img/${cor}.png`;
    pararLoop();
}

// Eventos dos botões.
$amarelo.addEventListener("click", () => ligar("amarelo"));
$verde.addEventListener("click", () => ligar("verde"));
$vermelho.addEventListener("click", () => ligar("vermelho"));
$automatico.addEventListener("click", ligarLoop);
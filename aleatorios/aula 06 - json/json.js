const mongol = [
    { 
        "dia": 1, 
        "tapas":2
    },
    {
        "dia":2, 
        "tapas": 5
    },
    {
        "dia":3, 
        "tapas":8
    },
    {
        "dia":4, 
        "tapas":11
    }
]

const $dados = document.getElementById("dados");

const mostrarDados = ( mongol ) => {

    const tapasRecebidos = (acumulador, mongol) => `${acumulador} Hoje José recebeu ${mongol.tapas} tapas<br>`;

    return mongol.reduce( tapasRecebidos, "" );

}

$dados.innerHTML = mostrarDados(mongol);
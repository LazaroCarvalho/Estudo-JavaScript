const $cep = document.getElementById('cep');
const $logradouro = document.getElementById('logradouro');
const $numero = document.getElementById('numero');
const $bairro = document.getElementById('bairro');
const $cidade = document.getElementById('cidade');
const $estado = document.getElementById('estado');

const encontrarCep = ( ) => {
    const cep = $cep.value;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    let teste;

    fetch ( url )
        .then ( res => res.json()) 
        .then ( dados => mostrarCep(dados));

    const mostrarCep = end => {
        $logradouro.value = end.logradouro;
        $bairro.value = end.bairro;
        $cidade.value = end.cidade;
        $estado.value = end.estado;
    };
    
}

$cep.addEventListener( 'blur', encontrarCep );
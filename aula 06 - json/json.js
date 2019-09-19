const alunos = [
    { 
        "nome":"ana", 
        "idade":15, 
        "uf":"SP", 
        "salario":600.00
    },
    {
        "nome":"jose", 
        "idade":21, 
        "uf":"RJ", 
        "salario":500.00
    },
    {
        "nome":"maria", 
        "idade":28, 
        "uf":"SP", 
        "salario":1500.00
    },
    {
        "nome":"hugo", 
        "idade":23, 
        "uf":"RJ", 
        "salario":1200.00
    }
]

const $dados = document.getElementById("dados");

const mostrarDados = ( json, campo) => {

    const criarHtml = (acumulador, aluno) => `${acumulador} ${aluno.nome} - ${aluno[campo]}<br>`;

    return json.reduce( criarHtml, "" );

}


const alunosSP = aluno => aluno.uf == "SP";
const somaSalario = (acumulador, aluno) => acumulador + aluno.salario;
const aumentaSalario = aluno => ({"nome":aluno.nome, "salario":aluno.salario + 100});
const salarioAbaixo = aluno => aluno.salario < 1000;

$dados.innerHTML = mostrarDados ( alunos, "idade" ) + "<br>";

$dados.innerHTML += "<div> <-- Alunos de SP --> </div>";
$dados.innerHTML += mostrarDados ( alunos.filter( alunosSP ), "idade" ) + "<br>";

$dados.innerHTML += "<div> <-- Salário Total --> </div>";
$dados.innerHTML += alunos.reduce ( somaSalario, 0 ) + "<br>";

$dados.innerHTML += "<br><div> <-- Aumentando Salários --> </div>";
$dados.innerHTML += mostrarDados( alunos.map ( aumentaSalario ), "salario" );

$dados.innerHTML += "<br><div> <-- Aumentando salário dos alunos de SP --> </div>";
$dados.innerHTML += mostrarDados( alunos.filter( alunosSP ).map( aumentaSalario ), "salario" );

$dados.innerHTML += "<br><div> <-- Alunos de SP com o salário abaixo de 1000     --> </div>";
$dados.innerHTML += mostrarDados( alunos.filter( alunosSP ).filter( salarioAbaixo ), "salario" );
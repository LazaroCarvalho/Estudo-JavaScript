// Associando variáveis aos elementos no HTML.
const $caixaPesquisa = document.getElementById("txt_siglas");
const $pesquisar = document.getElementById("btn_pesquisar");
const $tabela = document.getElementById("container_cidades");

// Compara a sigla buscada pelo usuário com a sigla de um estado dado.
const encontrarEstadoPelaSigla = estado => estado.sigla == $caixaPesquisa.value.toUpperCase();
// Retorna uma array com um único estado, cuja sigla corresponda a sigla buscada.
const pegarEstado = estados => estados.filter( encontrarEstadoPelaSigla );

// Cria um elemento HTML, uma linha da tabela com fundo escuro. Insere a cidade e seu número na linha.
const linhaEscura = ( indice, cidade ) => {
    return `<div class="container_item_escuro">
        <div class="item_number">
            <h2>${indice}</h2>
        </div>
        <div class="item_name">
            <h2>${cidade.nome}</h2>
        </div>
    </div>`;
}

// Cria o mesmo elemento HTML, porém com fundo claro.
const linhaClara = ( indice, cidade ) => {
    return `<div class="container_item_claro">
        <div class="item_number">
            <h2>${indice}</h2>
        </div>
        <div class="item_name">
            <h2>${cidade.nome}</h2>
        </div>
    </div>`;
}

// Insere na tabela da página todas as cidades do estado buscado.
const mostrarCidadesDoEstado = estado => {
    let a = 1; // Controla o número dado a cada cidade.
    let b = 2;
    let linha = "";

    // Coloca cidades na tabela em listras escuras ou claras, dependendo do índice de cada cidade.
    const colocarNaTabela = ( acumulador, cidade, indice, array ) => {
        if ( indice % 2 == 0 ) {

            // Criando uma linha escura e colocando nela a cidade e seu respectivo número.
            linha = `${acumulador} ${linhaEscura( a, cidade )}`;
            a += 2;
            return linha;

        } else {

            linha = `${acumulador} ${linhaClara( a, cidade )}`;
            b += 2;
            return linha;

        }
    }
    
    // Inserindo no HTML a tabela pronta, com todas as cidades do estado buscado.
    $tabela.innerHTML = estado[0].cidades.reduce(colocarNaTabela, "");
}

// Quando o botão Pesquisar for clicado, esta função executa-se e as cidades do estado buscado são inseridas na tabela.
$pesquisar.addEventListener("click", () => mostrarCidadesDoEstado(pegarEstado(estadosBrasileiros)));
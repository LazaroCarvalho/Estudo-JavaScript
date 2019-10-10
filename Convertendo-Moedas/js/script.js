const $de = document.getElementById("select_de");
const $para = document.getElementById("select_para");
const $resultado = document.getElementById("resultado_caixa");
const $valor = document.getElementById("input_valor");

console.log($de.accessKey);

// Converte o valor dado pelo usuário , de acordo com o "de" e "para".
const converterValor = (de, para) => {
    const url = "https://api.hgbrasil.com/finance?key=development";
    const proxy = "https://cors-anywhere.herokuapp.com/"

    fetch(proxy + url)
        .then( dados => dados.json())
        .then( json => converter(json));

    const converter = json => { // Convertendo
        let resultadoConvertido;
        if (para == "Real") {
            resultadoConvertido = ($valor.value * json.results.currencies[de].buy).toFixed(2);
            $resultado.value =  resultadoConvertido;
        }
        if (de == "Real") {
            resultadoConvertido = ($valor.value / json.results.currencies[para].buy).toFixed(2);
            $resultado.value = resultadoConvertido; 
        }
        else {
            resultadoConvertido = ($valor.value * json.results.currencies[de].buy / json.results.currencies[para].buy).toFixed(2);
            $resultado.value =  resultadoConvertido;
        }
    }
}

// Acionando função ao usuário tirar foco do input
$valor.addEventListener("blur", () => converterValor($de.value, $para.value));
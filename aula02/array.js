const number = [8, 9, 10, 11];
const numberPar = [];

const lengthArray = number.length;

/* 
    Filter() - Cria um vetor que com os elementos que estejam dentro de uma condição.

    Parâmetros:
    1 - Elemento do vetor
    2 - Índice do vetor
    3 - Vetor
*/
const ePar = ( num ) => num % 2 == 0;
const numberPar = number.filter(ePar);

/*
    Map() - Percorre o vetor retornando um vetor de mesmo tamanho, passando a uma função os seus elementos.
    
    Parâmetros:
    1 - Elemento do vetor
    2 - Índice do vetor
    3 - Vetor     
*/
const adicionar10 = ( num ) => num + 10;
const numeros10 = number.map (adicionar10);


/* for (let i = 0; i < lengthArray; i++) {
    console.log (number[i]);
} */

/* Remove o item neste índice
number.splice(3);

Removendo apartir de uma posição, tantas variáveis (,);
number.splice(0,1);

Substituir na posição 0, até a posição 1 apartie deste, por 5;
number.splice(0,1,5);

Deletar o último item da lista
number.pop();

Deletar o primeiro item da lista.
number.shift();

Adicionar ao fim da lista.
number.push(33);

Adicionar no inicio da lista.
number.unshift(44);

console.log(number); */
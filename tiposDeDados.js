/*string pode ser usado aspas duplas e aspas simples*/
let nome="Vinicius";
console.log(nome);
let sobrenome='Oliveira';
console.log(nome + sobrenome);

/*tipo inteiro */

let idade = 21;
console.log(idade);

let salario=1526.9;
console.log(salario);

console.log(nome+" "+sobrenome+ " "+ "salario de:"+salario+ "idade: "+ idade);

let diaEstaChuvoso = true;
console.log(diaEstaChuvoso);

let diaEstaQuente= false;
console.log(diaEstaQuente);

/*Valor not a number ou NaN*/

let naoNumerico=NaN;
console.log(naoNumerico);

/*Valores Null*/
let jogadores = null;
console.log(jogadores);

/*Valor Undefined*/
let espectadores = undefined;
espectadores=10;
console.log(espectadores);

/*Objeto literal*/

let meuCarro={
    marca:"fiat",
    cor:"azul",
    ano:2021
}

let moto={
    marca: "honda",
    cor:"vermelha",
    ano:2019,
    modelo: "CB500"
}

console.log(moto);

/*array é uma matriz, uma lista*/
let series=[
    "Friends", "breakingbad", "Game of Thrones"
]

console.log(series);
console.log(series[1]);

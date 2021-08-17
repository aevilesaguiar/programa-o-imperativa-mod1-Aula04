let nome= "José";
let sobrenome="da Silva";
let idade= 27;
let peso= 83.5;
let altura= 1.7;
let plano= true;


console.log(`${nome} ${sobrenome} tem ${idade} anos e seu indice de massa corpórea é de ${(peso/(altura*altura)).toFixed(2)}`);

/*criando através de objeto literal */

let tabelaDados={
     nome:"Carlos",
     sobrenome:"de Souza",
     idade: 28,
     peso: 80.1,
     altura: 1.76,
     plano:true
}
console.log(`${tabelaDados.nome} ${tabelaDados.sobrenome} tem ${tabelaDados.idade} anos e seu indice de massa corpórea é de ${(tabelaDados.peso/(tabelaDados.altura*tabelaDados.altura)).toFixed(2)} e possui plano : ${tabelaDados.plano}`);


let tabelaDados2={
     nome:"Aline",
     sobrenome:"Ferreira",
     idade: 33,
     peso: 63.7,
     altura: 1.53,
     plano:false
}
console.log(`${tabelaDados2.nome} ${tabelaDados2.sobrenome} tem ${tabelaDados2.idade} anos e seu indice de massa corpórea é de ${(tabelaDados2.peso/(tabelaDados2.altura*tabelaDados2.altura)).toFixed(2)} e possui plano : ${tabelaDados2.plano}`);

let tabelaDados3={
     nome:"Ana",
     sobrenome:"Paula",
     idade: 26,
     peso: 55,
     altura: 1.62,
     plano:true
}
console.log(`${tabelaDados3.nome} ${tabelaDados3.sobrenome} tem ${tabelaDados3.idade} anos e seu indice de massa corpórea é de ${(tabelaDados3.peso/(tabelaDados3.altura*tabelaDados3.altura)).toFixed(2)} e possui plano : ${tabelaDados3.plano}`);

const nome = "Thiago";
const idade = 2022 - 1978;
const cidadeDeNascimento = "Ribeirão preto";
const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " anos"+ " e nasci na cidade de " + cidadeDeNascimento;

console.log(apresentacao);

// template String - usar acento grave => `

const apresentacao2 = `meu nome é ${nome}, minha idade é ${idade} anos e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao2);



const nome2 = "Rogar";
const idade2 = 17;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome2} diz: "por favor, quero beber ${idade2 >= 18 ? bebidaMaior : bebidaMenor}"`;
console.log(pedido);
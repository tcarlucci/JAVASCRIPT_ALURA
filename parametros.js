//Parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(5, 7));
console.log(soma(-500, 7));
console.log(soma(67, 74));


// Parâmetro x Argumentos

function nomeIdade(name, age) {
    return `Meu nome é ${name} e minha idade é ${age}`;
}

console.log(nomeIdade("Thiago", 43));
console.log(nomeIdade(43, "Thiago"));

// os nomes dos parâmetros só são validos dentro da função, liberando os nomes após a execução => podemos usar o mesmo nome em várias funções 
function mult(num1, num2) {
    return num1 * num2;
}
//definindo um valor standard (1) - caso não recebido um dos valores
function mult2(num1 = 1, num2 = 1) {
    return num1 * num2;
}

// 9         // 6
console.log(mult(soma(4, 5), soma(3, 3)));
console.log(mult(soma(4, 5))); //o segundo número não foi passado = undefined. undefined = NaN => resultado da multiplicação NaN
console.log(mult2(soma(4, 5))); //Recebido o valor standard



function cumprimentar() {
    console.log('oi gente');
}

cumprimentar();

function cumprimentarPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`);
}

cumprimentarPessoa('Helena');

function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

console.log(operacaoMatematica(15, 30, 45)) // 90
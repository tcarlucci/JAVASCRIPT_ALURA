//* IMPORTANT
//! DEPRECATED
//? QUESTION 
//TODO: refactor...


function apresentar(nome) {
    return `meu nome é ${ nome}`
}


// Arrow function
//função  identificador parâmetro       =>  arrow 
const apresentarArrow = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;


//Arrow function com mais de uma linha de instrução.

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Somente números de 1 a 9"
    }else{
        return num1 + num2;
    }
}

//

//* diferente do operador maior ou igual que  >=

//* Operador OU ||
//* Operador E  &&


function verificaNumero(numero) {

    if (numero > 10) {
      return 'número maior que 10';
    } else {
      return 'número não é maior que 10';
    }
    }
   
   console.log(verificaNumero(9)) //número não é maior que 10



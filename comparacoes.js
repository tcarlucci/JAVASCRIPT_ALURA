// == (comparação implícita) - só compara valor

const numero = 8;
const texto = "8";

// node faz a conversão automática e compara
console.log(numero == texto);

// === comparação de tipo e valor - USAR === para boas práticas
console.log(numero === texto);


//typeof

console.log(typeof numero);

console.log(typeof texto);


// usar conversão explícita sempre

// Number();
// String();
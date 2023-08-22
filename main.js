// Variáveis e Tipos de Dados
let numero = 10;
let texto = "Olá, mundo!";
let diaDaSemana = "quarta";
let diaDeHoje = `Hoje é ${diaDaSemana}`;
let booleano = true;
let array = [1, 2, 3];
let objeto = { nome: "João", idade: 25 };

// Constantes
const NOVA_FUNCIONALIDADE_ESTA_DISPONIVEL = true;

// And, or e not
// &&
// ||
// !


// Tratamento de Erros
try {
    NOVA_FUNCIONALIDADE_ESTA_DISPONIVEL = false
  } catch (erro) {
    console.error("Ocorreu um erro: " + erro.message);
  }

// Funções
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

// Estruturas Condicionais
if (numero > 5) {
  console.log("Número é maior que 5");
} else if (numero == 5){
  console.log("Número é igual a 5")
} else {
  console.log("Número é menor que 5");
}

switch (diaDaSemana) {
  case "segunda":
    console.log("Hoje é segunda-feira.");
    break;
  case "terça":
    console.log("Hoje é terça-feira.");
    break;
  case "quarta":
    console.log("Hoje é quarta-feira.");
    break;
  case "quinta":
    console.log("Hoje é quinta-feira.");
    break;
  case "sexta":
    console.log("Hoje é sexta-feira.");
    break;
  default:
    console.log("Fim de semana!");
}


// Loops
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Array forEach
array.forEach(function(elemento) {
  console.log(elemento);
});

// Loop while
let contador = 0;
while (contador < 3) {
  console.log("Contador while: " + contador);
  contador++;
}

// Loop do-while
let outroContador = 3;
do {
  console.log("Outro contador do-while: " + outroContador);
  outroContador++;
} while (outroContador < 3);

// Loop for-of (para arrays)
for (let elemento of array) {
    console.log("Elemento: " + elemento);
  }

  // Loop for-in (para objetos)
for (let chave in objeto) {
    console.log(chave + ": " + objeto[chave]);
  }


// Objetos
console.log(objeto.nome);
console.log(objeto.idade);


// Classes (ES6)
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log("Olá, meu nome é " + this.nome);
  }
}

const pessoa = new Pessoa("Maria", 30);
pessoa.saudacao();


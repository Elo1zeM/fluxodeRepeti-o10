const menu = 10;

    switch (menu) {
      case 1: 
      console.log("Exercício 1 selecionando. Executando...\n");
      exercicio1(); 
      break;

      case 2: 
      console.log("Exercício 2 selecionando. Executando...\n");
      exercicio2(); 
      break;

      case 3: 
      console.log("Exercício 3 selecionando. Executando...\n");
      exercicio3(); 
      break;

      case 4: 
      console.log("Exercício 4 selecionando. Executando...\n");
      exercicio4(); 
      break;

      case 5: 
      console.log("Exercício 5 selecionando. Executando...\n");
      exercicio5(); 
      break;

      case 6: 
      console.log("Exercício 6 selecionando. Executando...\n");
      exercicio6(); 
      break;

      case 7:
      console.log("Exercício 7 selecionando. Executando...\n");
      exercicio7(); 
      break;

      case 8: 
      console.log("Exercício 8 selecionando. Executando...\n");
      exercicio8(); 
      break;

      case 9: 
      console.log("Exercício 9 selecionando. Executando...\n");
      exercicio9(); 
      break;

      case 10: 
      console.log("Exercício 10 selecionando. Executando...\n");
      exercicio10(); 
      break;
}
// FACIL //

// 1. Listar nomes com for...of
function exercicio1() {
  const nomes = ["Ana Laura", "Eloize", "Isabelly", "Kemmily", "Emily"];
  for (const nome of nomes) {
    console.log(nome);
  }
}

// 2. Somar valores com for...of
function exercicio2() {
  const numeros = [20, 30, 50, 70];
  let soma = 0;

  for (const num of numeros) {
    soma += num;
  }

  console.log("Soma total:", soma);
}

// 3. Exibir propriedades com for...in
function exercicio3() {
  const pessoa = {
    nome: "Iris",
    idade: 102,
    cidade: "Espirito Santo"
  };

  for (const chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }
}

// 4. Contar propriedades de um objeto
function exercicio4() {
  const obj = { a: 3, b: 7, c: 11, d: 15 };
  let count = 0;

  for (const chave in obj) {
    count++;
  }

  console.log("Total de propriedades:", count);
}

// MEDIO //

// 5. Concatenar nomes
function exercicio5() {
  const nomes = ["Ana Laura", "Eloize", "Isabelly"];
  let resultado = "";

  for (const nome of nomes) {
    resultado += nome + ", ";
  }

  console.log(resultado.slice(0, -2));
}

// 6. Tipos de dados
function exercicio6() {
  const valores = [70, "nomes", true, null, undefined];

  for (const valor of valores) {
    console.log(valor, "->", typeof valor);
  }
}

// 7. Incrementar idades
function exercicio7() {
  const pessoas = {
    "Ana Laura": 20,
    "Bruno Souza": 25,
    "Carlos Magno": 30
  };

  for (const nome in pessoas) {
    pessoas[nome] += 1;
  }

  console.log(pessoas);
}

// 8. Objeto para array de strings
function exercicio8() {
  const obj = { a: 2, b: 4, c: 6 };
  const resultado = [];

  for (const chave in obj) {
    resultado.push(`${chave}: ${obj[chave]}`);
  }

  console.log(resultado);
}

// DICIL  //


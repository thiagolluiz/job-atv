const num = parseInt(prompt("Informe um número: "));

const fibonacci = [0, 1]; // inicializa a sequência de Fibonacci com 0 e 1

// calcula a sequência de Fibonacci até que o último número seja maior ou igual ao número informado
while (fibonacci[fibonacci.length - 1] < num) {
  fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

// verifica se o número informado pertence à sequência de Fibonacci
if (fibonacci.includes(num)) {
  console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}

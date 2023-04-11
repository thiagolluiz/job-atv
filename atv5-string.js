let palavra = "exemplo"; // string de exemplo

let palavraInvertida = ""; // cria uma string vazia para armazenar a string invertida

for (let i = palavra.length - 1; i >= 0; i--) {
  // percorre a string de trás para frente, adicionando cada caractere na nova string
  palavraInvertida += palavra[i];
}

console.log(palavraInvertida); // exibe a string invertida no console

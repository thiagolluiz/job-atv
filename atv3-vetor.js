// vetor de faturamento diário
const faturamentoDiario = [2000, 3500, 4000, 1500, 6000, 2500, 0, 0, 2800, 3200, 4500, 3800, 2000, 0, 1500, 2200, 3000, 4200, 3800, 5000, 6000, 4500, 3500, 2800, 2000, 0, 0, 2800, 3200, 4500];

// cálculo do menor valor de faturamento diário
const menorFaturamentoDiario = Math.min(...faturamentoDiario);

// cálculo do maior valor de faturamento diário
const maiorFaturamentoDiario = Math.max(...faturamentoDiario);

// cálculo da média de faturamento diário (ignorando dias sem faturamento)
const faturamentoDiarioSemZero = faturamentoDiario.filter(valor => valor !== 0);
const mediaFaturamentoDiario = faturamentoDiarioSemZero.reduce((soma, valor) => soma + valor) / faturamentoDiarioSemZero.length;

// cálculo do número de dias com faturamento diário superior à média mensal
const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaFaturamentoDiario).length;

console.log(`Menor valor de faturamento diário: R$${menorFaturamentoDiario.toFixed(2)}`);
console.log(`Maior valor de faturamento diário: R$${maiorFaturamentoDiario.toFixed(2)}`);
console.log(`Número de dias com faturamento diário acima da média mensal: ${diasAcimaDaMedia}`);

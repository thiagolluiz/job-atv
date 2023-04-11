const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Cálculo do faturamento total
const faturamentoTotal = Object.values(faturamentoMensal).reduce(
  (acc, curr) => acc + curr,
  0
);

// Cálculo do percentual de cada estado
const percentuais = {};
for (const estado in faturamentoMensal) {
  const percentual = (faturamentoMensal[estado] / faturamentoTotal) * 100;
  percentuais[estado] = percentual.toFixed(2);
}

console.log(percentuais);

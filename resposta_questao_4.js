function anosComMaisPessoasTrabalhando(matriz) {
  const anosTrabalhados = {};

  // Percorre e conta quantas pessoas trabalharam em cada ano
  matriz.forEach(([inicio, fim]) => {
    for (let ano = inicio; ano <= fim; ano++) {
      if (anosTrabalhados[ano] === undefined) {
        anosTrabalhados[ano] = 1;
      } else {
        anosTrabalhados[ano]++;
      }
    }
  });

  // Encontra o maior número de pessoas 
  const maxPessoas = Math.max(...Object.values(anosTrabalhados));

  // Encontra o maior número de pessoas trabalhando
  const anosComMaisPessoas = Object.entries(anosTrabalhados)
    .filter(([ano, pessoas]) => pessoas === maxPessoas)
    .map(([ano, pessoas]) => parseInt(ano));

  return anosComMaisPessoas;
}


const matriz = [
  [2000, 2010],
  [2005, 2015],
  [2002, 2012],
  [2010, 2020]
];

const anosComMaisPessoas = anosComMaisPessoasTrabalhando(matriz);
console.log("Ano(s) com mais pessoas trabalhando:", anosComMaisPessoas);

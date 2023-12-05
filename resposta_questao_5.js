function maneirasDeOrganizar(numeroDePessoas) {
  let maneiras = 1;

  // Calcula o número de pessoas
  for (let i = 1; i <= numeroDePessoas; i++) {
    maneiras *= i;
  }

  return maneiras;
}

const numeroDePessoas = 5;
const maneiras = maneirasDeOrganizar(numeroDePessoas);
console.log(`Número de maneiras de organizar ${numeroDePessoas} pessoas: ${maneiras}`);

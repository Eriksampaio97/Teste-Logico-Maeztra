
function encontraDuplicados(array) {
  const contador = {};
  const duplicados = [];

  //ocorrência de cada número no array
  array.forEach((numero) => {
    if (contador[numero] === undefined) {
      contador[numero] = 1;
    } else {
      // se o número já existe, adiciona aos duplicados se ainda não estiver lá
      if (!duplicados.includes(numero)) {
        duplicados.push(numero);
      }
      contador[numero]++;
    }
  });

  return duplicados;
}

const array1 = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(encontraDuplicados(array1)); 

const array2 = [1, 2, 3, 4, 5];
console.log(encontraDuplicados(array2)); 
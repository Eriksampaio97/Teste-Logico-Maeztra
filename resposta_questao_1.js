function verificaSequencia(numero) {
  // transforma o número para uma string 
  const digitos = numero.toString();

  let crescente = true;
  let decrescente = true;

  // Verifica a sequência crescente
  for (let i = 0; i < digitos.length - 1; i++) {
    if (parseInt(digitos[i]) + 1 !== parseInt(digitos[i + 1])) {
      crescente = false;
      break;
    }
  }

  // Verifica a sequência decrescente
  for (let i = 0; i < digitos.length - 1; i++) {
    if (parseInt(digitos[i]) - 1 !== parseInt(digitos[i + 1])) {
      decrescente = false;
      break;
    }
  }

  if (crescente) {
    return "Os dígitos estão em ordenação sequencial CRESCENTE.";
  } else if (decrescente) {
    return "Os dígitos estão em ordenação sequencial DECRESCENTE.";
  } else {
    return "Os dígitos não estão em uma ordenação sequencial.";
  }
}

// Exemplo de uso:
console.log(verificaSequencia(1234));
console.log(verificaSequencia(1357));



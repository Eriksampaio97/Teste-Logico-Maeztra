function sequenciaValida(str) {
  const pilha = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (map[char]) {
      // se for de abertura, coloca na pilha
      pilha.push(char);
    } else {
      // se for de fechamento
      const ultimoAberto = pilha.pop(); // Pega o último de abertura

      // Verifica se o último abertura corresponde ao de fechamento atual
      if (char !== map[ultimoAberto]) {
        return false; 
      }
    }
  }

  // Se a pilha estiver vazia, todos foram correspondidos corretamente
  return pilha.length === 0;
}



console.log(sequenciaValida("(){}[]")); 
console.log(sequenciaValida("({[]})")); 
console.log(sequenciaValida("{[}]")); 
console.log(sequenciaValida("({}[])")); 
console.log(sequenciaValida("{[(])}")); 
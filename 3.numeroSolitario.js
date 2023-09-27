const numeros = [12, 17, 15, 19, 22, 17, 19, 12];

function encontrarNumerosSolitarios(array) {
  const ocorrencias = [];

  for (const num of array) {
    if (ocorrencias[num]) {
      ocorrencias[num]++;
    } else {
      ocorrencias[num] = 1;
    }
  }
  
  const numerosSolitarios = [];
  for (const num in ocorrencias) {
    if (ocorrencias[num] === 1) {
      numerosSolitarios.push(parseInt(num));
    }
  }
  
  return numerosSolitarios;
}

const numerosSolitarios = encontrarNumerosSolitarios(numeros);
console.log(numerosSolitarios); 
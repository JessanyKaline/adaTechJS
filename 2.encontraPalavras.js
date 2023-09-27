const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"

function contarPalavrasCamelCase(frase) {
 
  let contador = 1;

  for (let i = 0; i < frase.length; i++) {
    const charAtual = frase[i];

    if (charAtual === charAtual.toUpperCase() && charAtual !== charAtual.toLowerCase()) {
      contador++;
    }
  }

  return contador;
}

const quantidadeDePalavras = contarPalavrasCamelCase(frase);
console.log(quantidadeDePalavras);


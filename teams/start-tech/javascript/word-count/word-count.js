
export const countWords = (texto) => {
  const minusculo = texto.toLowerCase(); // Passando tudo pra minúsculo
  const palavrasSeparadas = minusculo.match(/(\w+)('\w+)?/g); //separando as palavras com e sem apóstrofo
  
  let resultado = {};

  for (const palavra of palavrasSeparadas ) { // Realizando a contagem
      resultado[palavra] ??= 0; 
      resultado[palavra] += 1;
    
  }
   return resultado;
}




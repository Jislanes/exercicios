
export const isArmstrongNumber = (numero) => {
 const n = numero.toString() // Transformando em String

  let contador = 0; // inicia o contador

for (let index = 0; index < n.length; index++) {
  
  contador += n[index]**(n.length); // Realizando a soma dos elementos elevado ao número de dígitos do número
}
  if (contador === numero){  // Comparando o resultado da soma com o número imputado
  return true; 
  } else{
   return false;
  }
}
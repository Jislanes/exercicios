
export const steps = (numero) => {
  if (numero <= 0){ // Verificando se o número é positivo
  throw new Error('Only positive numbers are allowed');
}
  let passos = 0; // Iniciando o contador

while (numero !== 1){  // Realizando a contagem dos passos
  
  if (numero % 2 == 0){ // Se o número for par, divida o número por 2
   numero = numero/2
  }
  else{
   numero = (3*numero) +1 // Se o número for ímpar, multiplique por 3 e some 1
  }
  passos++ // Contando os passos
}
return passos // retorno
}
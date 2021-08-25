

export const compute = (esquerda, direita) => {
   let hamming = 0; // Iniciando contador

  if (esquerda === direita) { //Garantindo que quando for inserido valores iguais será retornado 0
    return 0;

  }else if (esquerda === ''){ // Garantindo que o valor da esquerda não pode ser nulo
    throw new Error('left strand must not be empty');

  }else if (direita === ''){ //Garantindo que o valor da direita não pode ser nulo
    throw new Error('right strand must not be empty');

  }else if (direita.length !== esquerda.length ){ //Garantindo que as strings não podem ter tamanhos diferentes
    throw new Error('left and right strands must be of equal length');
}
   else {

  for (let index = 0; index < esquerda.length; index++) { // Comparando os itens em cada string
       if (esquerda[index] !== direita[index]){

       hamming++ //contando as diferenças
      }
  }
    return hamming
};
}
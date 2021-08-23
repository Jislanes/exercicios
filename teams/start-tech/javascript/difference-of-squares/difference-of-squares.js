//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
   constructor(numero) {
    this.numero = numero;
   
   }
  get sumOfSquares() {
    let n = 0; // iniciando contador
    let soma = 0;   

  while (n <= this.numero){
      
    soma += n**2;    // realizando soma dos quadrados

    n++;
  }

  return soma;
  }  


  get squareOfSum() {
    let n = 0;
    var quadrado = 0;
    
    while (n <= this.numero){
  
      quadrado += n;  // realizando a soma
 
      n++;

    }

    var quadradoSoma = quadrado**2;  // fazendo o quadrado da soma
      return quadradoSoma
  
  }

 get difference() {

  var diferenca = this.squareOfSum - this.sumOfSquares // diferença do quadrado da soma e das somas dos quadrados

  return diferenca;

 }

}
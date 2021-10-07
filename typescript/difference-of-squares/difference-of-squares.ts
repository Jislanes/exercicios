export class Squares {
  private readonly numeros: number[];

  constructor(count: number) {
    this.numeros = Array.from(this.generator(count));
  }

  private *generator(count: number): Iterable<number> {
    var item = 1;
    while(item <= count){
    // for (let item = 1; item <= count; item++) {
      //Gerando o array de números
      yield item++;
    }
  }

  get sumOfSquares(): number {
    return this.numeros.reduce((soma, valor) => soma + valor ** 2);
  }

  get squareOfSum(): number {
    return this.numeros.reduce((soma, valor) => soma + valor) ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export class Triangle {
  private readonly sideA: number;
  private readonly sideB: number;
  private readonly sideC: number;

  constructor(...sides: number []) {
    this.sideA = sides[0];
    this.sideB = sides[1];
    this.sideC = sides[2];
  }

  get todosLadosMaiorQueZero (): boolean {
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0;
  };
  get somaDoisLadosMaiorQueUmLado(): boolean { 
    return (this.sideA + this.sideB >= this.sideC) && (this.sideB + this.sideC >= this.sideA) && (this.sideC + this.sideA >= this.sideB); 
  };

  get validacaoExistenciaTriangulo(): boolean {
    return this.todosLadosMaiorQueZero && this.somaDoisLadosMaiorQueUmLado;
  }; 

  get isEquilateral(): boolean {
    return this.sideA === this.sideB && this.sideA === this.sideC && this.todosLadosMaiorQueZero;
  }

  get isIsosceles(): boolean {
    return this.validacaoExistenciaTriangulo && (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC);
  };

  get isScalene(): boolean {
    return this.validacaoExistenciaTriangulo && (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideC !== this.sideA);
  };

  }


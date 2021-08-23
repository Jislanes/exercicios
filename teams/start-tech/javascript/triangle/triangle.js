//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a,b,c) { //Lados do triângulo
    this.a = a;
    this.b = b;
    this.c = c
  }

  get isEquilateral() {
    if (this.a === this.b && this.a === this.c && this.b > 0 && this.c > 0 && this.b > 0) { // Garantindo que todos os lados são iguais e diferentes de zero
      return true;
    } else {
      return false;
    }
  }

  
  get isIsosceles() {
    if (this.a === this.b || this.a === this.c || this.c === this.b) { // Garantindo que pelo menos dois lados são iguais
      if (this.b + this.c < this.a|| this.a+ this.c < this.b || this.b + this.a < this.c) { //Garantindo a desigualdade de triângulos
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  get isScalene() {
    if (this.a !== this.b && this.b !== this.c && this.a !== this.c) { // Garantindo que todos os lados são diferentes
      if (this.b + this.c < this.a|| this.a+ this.c < this.b || this.b + this.a < this.c) { //Garantindo a desigualdade de triângulos
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  get isDegenerate() { 
    if (this.b > 0 && this.c > 0 && this.b > 0) {
        if (this.a + this.b === this.c || this.c + this.b === this.a || this.a + this.c === this.b){

         return true
        } else {
          return false;
        }
      } else{
        return false;
      }
        }
    }


 


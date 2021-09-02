

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }


  get isEquilateral() {
      if (this.a === this.b && this.c === this.b && this.a > 0) {
      return true
      
    } else{
      return false
    }
  }

  get isIsosceles() {
    if (this.a === this.b || this.c === this.a || this.c === this.b){
      
      if (this.a < this.b + this.c && this.b < this.a + this.c && this.c < this.b + this.a){
         return true;
      }  else {
         return false;
      }
   } else {
    return false ;

  }
}
  get isScalene() {
    if (this.a != this.b && this.b != this.c){
    
    if (this.a < this.b + this.c && this.b < this.a + this.c && this.c < this.b + this.a){
      return true;
   }  else {
      return false;
   }
} else {
  return false;
}
}
}
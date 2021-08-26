

export class ResistorColorTrio {
  constructor(... colors) {
    this.colors = colors[0];
  }

  get label() {
    const obj = { // Definindo o valor referente a cada cor
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9
      }

    let colorTrans = + ('' + obj[this.colors[0]] + obj[this.colors[1]]); // Transformando em número
    let dezena = 10**(obj[this.colors[2]])*colorTrans;      

    if (Number.isNaN(dezena)) 
      
       throw new Error("invalid color");

     else if (dezena <= 999 && dezena > 0){

       return `Resistor value: ${dezena} ohms`;
 }
     else {
       return `Resistor value: ${dezena/1000} kiloohms`;
 }    
}
}


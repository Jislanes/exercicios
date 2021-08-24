
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
export const colorCode = (color) => { //Retorna o valor de acordo à cor inserida
  return obj[color]
};

export const COLORS = Object.keys(obj); // Retorna a cor do resistor

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
export const decodedValue = (colors) => {
 return obj[colors[0]] * 10 + obj[colors[1]]; // Transformando em dezena e somando os dois valores
};


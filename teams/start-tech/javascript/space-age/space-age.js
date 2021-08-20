//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.  

const idade = {
  earth: 1,
  venus: 0.61519726,
  mercury: 0.2408467,
  saturn: 29.447498,
  mars: 1.8808158,
  jupiter: 11.862615,
  uranus: 84.016846,
  neptune: 164.79132  //Parâmetros para cálculo da idade em outros planetas usando a idade terrestre como base
}
export const age = (planeta,idadeEmSegundos) => {
  const anosTerrestresSec = 31557600; // idade na terra em segundos

  const idadeReal = parseFloat((idadeEmSegundos / (anosTerrestresSec*idade[planeta])).toFixed(2)); //calculando a idade, passando para o formato correto e fixando em duas casa decimais

  return idadeReal;
}

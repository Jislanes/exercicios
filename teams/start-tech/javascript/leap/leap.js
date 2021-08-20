//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Ser divisível por 4 E NÃO por 100, EXCETO quanto é divisível por 400


export const isLeap = (ano) => {
  if ( (ano % 4 === 0 && ano % 25 !== 0) || (ano % 400 === 0) ) { 
    return true
  } 
  else {
    return false
  }
};

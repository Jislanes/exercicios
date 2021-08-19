//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dataAtual) => {
  var dataSec =  dataAtual.getTime(); // Pegando num de milisecond da data inicial desde 1970
  var dataGiga = dataSec + 1e12;    //Somando 1 giga segundo
 return new Date(dataGiga); // transformando de milisegundo para um objeto date
};



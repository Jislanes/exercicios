
export const convert = (numero) => {

let pling = numero % 3; // resto da divisão por 3
let plang = numero % 5; // resto da divisão por 5
let plong = numero % 7; // resto da divisão por 7
 let som = '' // iniciando a contagem com string vazia

 if (pling === 0) // se resto da divisão por 3 for === 0 , some este barulho
   som += 'Pling';
 
 if (plang === 0) // se resto da divisão por 5 for === 0 , some este barulho
   som += 'Plang';

 if (plong === 0) // se resto da divisão por 7 for === 0 , some este barulho
  som +='Plong';

if (pling !== 0 && plang !== 0 && plong !== 0) // se o resto das divisões forem diferente de zero, retorne o número dado
  som += numero


return som
}
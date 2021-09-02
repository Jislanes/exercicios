
export const steps = (numero) => {
let passos = 0;
 if (numero <= 0){
  throw new Error('Only positive numbers are allowed')}
  
  while (numero > 1) {
     if (numero % 2 === 0){
     numero = numero/2;
    } else {
      
      numero = (numero*3) + 1;
    }
    passos ++
    }
    return passos
}

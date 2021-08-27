
export const classify = (numero) => {
  if (numero <= 0){
  throw new Error('Classification is only possible for natural numbers.'); // Descartando inputs inválidos
  }
  
   let total = 0;

 for (let index = 1; index < numero; index++) {  // Realizando o somatório dos números anteriores ao número inputado
   if (numero % index === 0){
    
    total += index;
   }
 }     
    //Números perfeitos
   if (total === numero){
   return ('perfect');
   }
  
   //Números Abundantes
   if (total > numero){
    return ('abundant');
    }

   //Números deficientes
   if (total < numero){
   return  ('deficient')
   }
};

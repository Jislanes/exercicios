
export function cardTypeCheck(stack, card) {
  let counter = 0;
  
  stack.forEach((element) => {
    if(element === card){
      counter++;
    }
  });
  
return counter
}

export function determineOddEvenCards(stack, type) {
 let counter = 0;
 
  if(type === true) {
     for (const carta of stack) {
       if (carta % 2 === 0) counter++
   } return counter
    }

  if(type === false) {
      for (const carta of stack) {
        if (carta % 2 != 0) counter++
    } return counter
     }
}

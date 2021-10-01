
export function getCardPosition(stack, card) {
return stack.indexOf(card);
}

export function doesStackIncludeCard(stack, card) {
  return stack.includes(card) ?? false;
}

export function isEachCardEven(stack) {
 let contador = 0;
  for (var i = 0; i < stack.length; i++) {
  if (stack[i]% 2 != 0) {
    contador++
  }
} if (contador === 0){return true} else{return false}
}

export function doesStackIncludeOddCard(stack) {
  let contador = 0;
  for (var i = 0; i < stack.length; i++) {
  if (stack[i]% 2 != 0) {
    contador++
  }
} if (contador != 0){return true} else{return false}
}

export function getFirstOddCard(stack) {
  const found = stack.find(element => element % 2 != 0);
  return found
}

export function getFirstEvenCardPosition(stack) {
  const found = stack.findIndex(element => element % 2 === 0);
  return found
}

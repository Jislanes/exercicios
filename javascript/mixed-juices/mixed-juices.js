
export function timeToMixJuice(name) {
  if (name === 'Pure Strawberry Joy'){return 0.5}
  if (name === 'Energizer'){return 1.5}
  if (name === 'Green Garden'){return 1.5}
  if (name === 'Tropical Island'){return 3}
  if (name === 'All or Nothing'){return 5}
  else {
    return 2.5
  }
}

export function limesToCut(wedgesNeeded, limes) {
 let quantidade = 0;
 let contador = 0;

 while ( quantidade < wedgesNeeded &&  contador < limes.length){

   if (limes[contador] === 'small') {
     quantidade += 6;
   }
   else if (limes[contador] === 'medium') {
    quantidade += 8;
  }
   else if (limes[contador] === 'large') {
    quantidade += 10;
  }
  contador ++;
} return contador;
}

export function remainingOrders(timeLeft, orders) {
  let quantidade = 0;
  let contador = 0;

if (timeLeft < 0.5){
    return orders.slice(1, orders.length)

} else{
 
   while ( quantidade < timeLeft &&  contador < orders.length){
 
    if (timeToMixJuice(orders[contador]) <= timeLeft){
    quantidade += timeToMixJuice(orders[contador])
    }
  
  contador++
  } 

let sucosRestantes = orders.slice(contador, orders.length);
  return sucosRestantes

}

}



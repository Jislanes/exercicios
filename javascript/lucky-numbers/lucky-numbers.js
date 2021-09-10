// @ts-check

export function twoSum(array1, array2) {
  const soma1 = parseFloat(array1.join(''));
  const soma2 = parseFloat(array2.join(''));
    return  soma1 + soma2
}
    
export function luckyNumber(value) {
  const string = String(value);
  const array = string.split('')
  .reverse()
  .join('');
  if (string == array){
    return true
  } else{
    return false
  }
}

export function errorMessage(input) {
 let numero = Number(input);
 console.log(numero)
 if (input === '' || input === null || input === undefined){
     return 'Required field';
} else if (!numero){
  return 'Must be a number besides 0';
}
else{
  return ''
}
}

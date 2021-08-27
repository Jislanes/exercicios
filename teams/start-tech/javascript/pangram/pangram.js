//
export const isPangram = (texto) => {
 if (texto === ('')) {
        return false
 }

  const letras  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const minusculas = texto.toLowerCase();
  const pangram = minusculas.split("");

for (let item of letras){

    if (!pangram.includes(item)){ 
  
    return false
    }        
 }
    
    return true
    }
  

  


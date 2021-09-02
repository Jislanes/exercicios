

export function frontDoorResponse(blurb) {
   let primeiraLetra= blurb.charAt(0)
    return primeiraLetra
  }
  
export function backDoorResponse(blurb) {
    let semEspaco = blurb.trim();
      let ultimaletra = semEspaco.charAt(semEspaco.length-1);
       return ultimaletra 
}

export function capitalize(word) {
  let maiuscula = word.charAt(0).toUpperCase();
  let minuscula = word.slice(1).toLowerCase();
  return maiuscula + minuscula
 
}

 export function frontDoorPassword(responses) {
   return capitalize(responses)
 }

 export function backDoorPassword(responses) {  

  return capitalize(responses) + ', please'
   }
  
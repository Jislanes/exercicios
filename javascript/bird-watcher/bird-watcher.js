
export function totalBirdCount(birdsPerDay) {
  let passaros = 0
  for (let index = 0; index < birdsPerDay.length; index++) {
    
    passaros += birdsPerDay[index];
    
  }
  return passaros
}


export function birdsInWeek(birdsPerDay, week) {

  let passarosSemana = birdsPerDay.slice((week*7)-7, (week*7));

  return totalBirdCount(passarosSemana)
  
}

export function fixBirdCountLog(birdsPerDay) {
   
  for (let i = 0; i < birdsPerDay.length; i = i + 2) {
   
    birdsPerDay[i] = birdsPerDay[i] + 1;   
 }
       return birdsPerDay
  }
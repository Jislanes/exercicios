

export function canExecuteFastAttack(knightIsAwake) {
   
if (!knightIsAwake){
 return true
}else{
  return false
}
}
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
 
  if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake ){
  return false
  }else {
  return true
  }

}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
 if (prisonerIsAwake && !archerIsAwake){
 return true
} else{
  return false
}
}

export function canFreePrisoner(knightIsAwake,archerIsAwake,prisonerIsAwake,petDogIsPresent) {
  if ((!knightIsAwake && prisonerIsAwake && !archerIsAwake && petDogIsPresent) || (!prisonerIsAwake && !archerIsAwake && petDogIsPresent) || (knightIsAwake && prisonerIsAwake && petDogIsPresent && !archerIsAwake) || (!knightIsAwake && prisonerIsAwake && !archerIsAwake && !petDogIsPresent)){
  return true
 }else{
   return false
 }
}
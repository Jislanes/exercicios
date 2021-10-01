/// <reference path="./global.d.ts" />
// @ts-check

 export function cookingStatus(time) {
         if (time === 0){
         return 'Lasagna is done.'
     } else if (time === undefined){
         return 'You forgot to set the timer.'
     }else {
         return 'Not done, please wait.'
     }
  }
  export function preparationTime (layers, timePerLayer = 2) {
    const tempo = layers.length*timePerLayer
     return tempo
    }

  export function quantities (layers) {
   let noodles = layers.filter(layer => layer === 'noodles').length*50;
   let sauce = layers.filter(layer => layer === 'sauce').length*0.2;
   return {noodles,sauce};
  }

  export function addSecretIngredient (receitaFriend, minhaReceita) {
      minhaReceita.push(receitaFriend[receitaFriend.length-1])
   }
   export function scaleRecipe (recipe, portions) {
         const novo = {} ;
         for (const ingredients in recipe) {
         novo[ingredients] = (recipe[ingredients]/2)*portions;
        }
        return novo;
    }
 
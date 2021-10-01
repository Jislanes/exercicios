/// <reference path="./global.d.ts" />


import { checkStatus, checkInventory } from './grocer';

export function isServiceOnline() {
 function callback (storeStatus){
   return storeStatus === 'ONLINE';
}
return checkStatus(callback);
}

export function pickFruit(variety, quantity, callback) {
  const obj = {
    variety, quantity
  }
  return checkInventory(obj, callback)

}

export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (err != null) throw new Error (err);

   return isAvailable ? 'PURCHASE':'NOOP';
}

export function pickAndPurchaseFruit(variety, quantity) {
 return pickFruit(variety,quantity, purchaseInventoryIfAvailable);
}

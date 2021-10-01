/// <reference path="./global.d.ts" />

export function getFirstCard(deck) {
  let [a,b,...rest] = deck;
  return a
}

export function getSecondCard(deck) {
  let [a,b,...rest] = deck;
  return b
}

export function swapTopTwoCards(deck) {
  let [a,b,...rest] = deck;
  return [b,a,...rest]
}

export function discardTopCard(deck) {
  let [a,...rest] = deck;
  return [a, [...rest]];
}

export function insertFaceCards(deck) {
  const faceCards = ['jack', 'queen', 'king']
  let[a,...rest] = deck
  return [a,...faceCards,...rest]
 
}
 
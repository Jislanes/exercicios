/// <reference path="./global.d.ts" />
// @ts-check


export function createVisitor(name, age, ticketId) {
 const visitor = {
   name: name,
   age: age,
   ticketId: ticketId
 }
 return visitor;
}


export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
    if (tickets[ticketId] === null){
    return 'not sold'
  } else if(tickets[ticketId] === undefined){
    return 'unknown ticket id'
  }
  else {
    return `sold to ${tickets[ticketId]}`
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  if (ticketStatus(tickets, ticketId) === 'not sold' ||ticketStatus(tickets, ticketId) === 'unknown ticket id'){
    return 'invalid ticket !!!'
  } else {
    return tickets[ticketId]
  }
}

export function gtcVersion(visitor) {
  if (visitor.gtc != null && visitor.gtc != undefined){
   return visitor.gtc.version 
  }
}

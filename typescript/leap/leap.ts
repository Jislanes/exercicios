export function isLeap(year: number): boolean {
  let divisivelPor4:boolean = year % 4 === 0; 
  let divisivelPor400:boolean = year % 400 === 0;
  let naoDivisivelPor100:boolean = year % 100 != 0;
  
 let ehBissexto:boolean = divisivelPor400 || divisivelPor4 && naoDivisivelPor100;
 return ehBissexto
 
//  return (year % 400 === 0 || year % 4 === 0 && year % 100 != 0 );
}
// Adicionando Propriedade

// export function isLeap(year: number): boolean {
//   return year.isDivisibleBy(400) 
//         || (!year.isDivisibleBy(100) && year.isDivisibleBy(4));
// }
// declare global {
//   interface Number {
//     isDivisibleBy : (divisor: number) => boolean;
//   }
// }
// Number.prototype.isDivisibleBy = function (divisor: number): boolean {
//   return this.valueOf() % divisor === 0;
// };
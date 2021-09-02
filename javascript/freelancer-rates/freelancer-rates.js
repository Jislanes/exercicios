
export const DIFFERENCE_PRECISION_IN_DIGITS = 6;

export function dayRate(ratePerHour) {
  const taxa = ratePerHour*8
 return taxa
}

export function monthRate(ratePerHour, discount) {
  const taxaPorMes = ratePerHour*8*22;
  const desconto = 1- discount;
  const taxaComDesconto = taxaPorMes*desconto;
  return  Math.ceil(taxaComDesconto);
}

export function daysInBudget(budget, ratePerHour, discount) {
  const diasPagos = budget/((ratePerHour*8)*(1-discount));
  return Math.floor(diasPagos)
}

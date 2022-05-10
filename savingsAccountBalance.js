const savingsAccountBalance = (
  openingSum,
  interestRate,
  taxFreeLimit,
  taxRate,
  numMonths
) => {
  let interest = 0;
  let tax = 0;
  let newBalance = 0;

  if (openingSum < 1) {
    return 0;
  }
  const interestCalc = (num1) => {
    interest = num1 * interestRate * 0.01;
  };
  const taxCalc = (num2) => {
    tax = (num2 - taxFreeLimit) * taxRate * 0.01;
  };
  const newBlanceCalc = (num3) => {
    newBalance = num3 + interest - tax;
  };

  interestCalc(openingSum);
  if (openingSum > taxFreeLimit) {
    taxCalc(openingSum);
  }
  newBlanceCalc(openingSum);

  for (let i = 1; i < numMonths; i++) {
    interestCalc(newBalance);
    if (newBalance > taxFreeLimit) {
      taxCalc(newBalance);
    }
    newBlanceCalc(newBalance);
  }
  
  return newBalance
};

module.exports = { savingsAccountBalance };

const savingsAccountBalance = (
  openingSum,
  interestRate,
  taxFreeLimit,
  taxRate,
  numMonths
) => {

// first I make variables that I can assign interest, tax and newBalance claculations to
  let interest = 0;
  let tax = 0;
  let newBalance = 0;

//condition for if there is no account balance
  if (openingSum < 1) {
    return 0;
  }

/* creating universal functions to be used for the 
calculations so i can go between OpeningSum and newBalance
without crossover of the values */
  const interestCalc = (num1) => {
    interest = num1 * interestRate * 0.01;
  };
  const taxCalc = (num2) => {
    tax = (num2 - taxFreeLimit) * taxRate * 0.01;
  };
  const newBlanceCalc = (num3) => {
    newBalance = num3 + interest - tax;
  };

//do the first iteration manually with openingSum to allow newBalance to be created
  interestCalc(openingSum);
  if (openingSum > taxFreeLimit) {
    taxCalc(openingSum);
  }
  newBlanceCalc(openingSum);

  // loop through using newBalance and repeat the calculations for as many months as required

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

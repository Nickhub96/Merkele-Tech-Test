const { expect } = require("chai");
const { savingsAccountBalance } = require("../savingsAccountBalance");

describe("savingsAccountBalance", () => {
  it("returns 0 when there is not openingSum", () => {
    expect(savingsAccountBalance(0, 2, 20000, 1, 2)).to.deep.equal(0);
  });
  it("returns the correct acccount balance with one month of interest and tax required", () => {
    expect(savingsAccountBalance(10000, 1, 9000, 1, 1)).to.deep.equal(10090);
  });
  it("returns the correct account balance when there is not tax", () => {
    expect(savingsAccountBalance(10000, 1, 20000, 1, 2)).to.deep.equal(10201);
  });
  it("returns the correct account balance when there is tax required", () => {
      expect(savingsAccountBalance(25000, 2, 20000, 1, 2)).to.deep.equal(25904.5)
  })
  it('returns the correct account balance when 1 month is tax free and the next is not', () => {
      expect(savingsAccountBalance(19800, 2, 20000, 1, 2)).to.deep.equal(20597.96)
  })
  it("returns the correct account balance when numMonths is over 2", () => {
    expect(savingsAccountBalance(25000, 2, 20000, 1, 3)).to.deep.equal(26363.545000000002)
})
});

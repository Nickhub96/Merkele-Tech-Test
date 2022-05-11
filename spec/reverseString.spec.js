const { expect } = require("chai");
const { reverseString } = require("../reverseString");

describe("reverseString", () => {
  it("returns an empy string whne passed an empty string", () => {
    expect(reverseString("")).to.deep.equal("");
  });
  it("returns a single character if passe da single character", () => {
    expect(reverseString("a")).to.deep.equal("a");
  });
  it("returns a short string that has been reversed", () => {
    expect(reverseString("abcb")).to.deep.equal("bcba");
    expect(reverseString("test")).to.deep.equal("tset");
  });
  it("returns a longer string that has been reversed", () => {
    expect(reverseString("racecar")).to.deep.equal("racecar");
  });
});

const { expect } = require("chai");
const {Time} = require("../timeClass")

describe.only("Time", ( ) => {
    it("returns the correct time when time vlaues are passed to it", ()=> {
        expect(new Time(26, 20, 70)).to.deep.equal("02:21:10")
    })
})
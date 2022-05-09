const {expect} = require('chai');
const { longestSequence } = require('../longestSequence')

describe('longestSequence()', () => {
    it('returns an empty object when passed an empty string', () => {
        expect(longestSequence("")).to.deep.equal({})

    })
    it('returns the correct object when passed a single letter string', () => {
        expect(longestSequence("a")).to.deep.equal({a:1})
        expect(longestSequence("p")).to.deep.equal({p:1})
    })
    it('returns the correct object when passed 2 consecutive letters in 3 letter string', () => {
        expect(longestSequence("abb")).to.deep.equal({b:2})
        expect(longestSequence("ddf")).to.deep.equal({d:2})
    })
    it('returns the correct object when passed a string of multiple random letters', () => {
        expect(longestSequence("dghhhmhmx")).to.deep.equal({h:3})
        expect(longestSequence("dhkkhhKKKt")).to.deep.equal({k:3})
        expect(longestSequence("aBbBadddadd")).to.deep.equal({b:3})
    })
    it('returns the correct object when passed a very long string', ()=> {
        expect(longestSequence("rrrljkhhhhtubijjklpotsrrrrrrrrnmlopqrstuvwxyz")).to.deep.equal({r:8})
    })
})
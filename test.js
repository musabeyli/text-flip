const flip = require('./')
require('chai').should()


describe('text-flip', () => {
  it('flips the text upside down', () => {

    const output = flip.flip('Beep boop, BOP?')
    output.should.equal("¿ԀO𐐒 'dooq dǝǝ𐐒")

  })

  it('unflips the text', () => {
flip.unflip("¿ԀO𐐒 'dooq dǝǝ𐐒 ").should.equal('Beep boop, BOP?')


  })



})

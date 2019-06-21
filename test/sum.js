let sum = require('../sum');
let expect = require('chai').expect;

describe('#sum()', function () {

  context('without arguments', function () {
    it('should return 0', function () {
      expect(sum()).to.equal(0)
    })
  })

})
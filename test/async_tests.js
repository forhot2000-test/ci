var Q = require('q');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.should();
chai.use(chaiAsPromised);

describe('Array', function() {
  describe('string compare', function () {

    it('async test string compare - chai as promised', function () {
      /**
       *
       * var chai = require("chai");
       * var chaiAsPromised = require("chai-as-promised");
       *
       * chai.should();
       * chai.use(chaiAsPromised);
       */
      return Q('ok').should.eventually.equal('ok');
    });

    it('async test string compare - promise', function (done) {
      return Q('ok').then(function(value) {
        value.should.equal('ok');
      })
      .then(done, done);
    });

    it('async test string compare', function (done) {
      return Q('ok').then(function(value) {
        if (value == 'ok') done();
        else done(new Error('not equal ok'));
      });
    });

    it('sync test string compare', function () {
      'ok'.should.equal('ok');
    });
  });
});

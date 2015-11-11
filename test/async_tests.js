var Q = require('q');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.should();
chai.use(chaiAsPromised);

describe('Array', function() {
  describe('string compare', function () {

    it('async test string compare - chai as promised (uid:b6f26504-b92d-4365-85f1-7cfce98a0253)', function () {
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

    it('async test string compare - promise (uid:5ae8db50-8f51-47cb-8de1-1469deac0755)', function (done) {
      return Q('ok').then(function(value) {
        value.should.equal('ok');
      })
      .then(done, done);
    });

    it('async test string compare (uid:0c3b50a8-bf2f-4f74-91c9-1adc2e90e916)', function (done) {
      return Q('ok').then(function(value) {
        if (value == 'ok') done();
        else done(new Error('not equal ok'));
      });
    });

    it('sync test string compare (uid:234925bc-3a02-4314-abde-32053ae84bb3)', function () {
      'ok'.should.equal('ok');
    });
  });
});

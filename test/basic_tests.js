var assert = require("assert");

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present (uid:db8f4233-8c85-4ac9-a493-55bbf18b8952)', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    describe('new test case', function () {
      function newTestCase (user, pwd, remember) {
        assert(user, "username can't be null.");
        assert(pwd, "password can't be null.");
      }

      it('west (uid:ba5abd9e-a25b-417e-b3cc-72c43666974c)', function () {
        newTestCase.apply(this, ['west', 'User@123', true]);
      });

      it('pluto (uid:85ffa450-4988-4c25-859d-484fc53a503f)', function () {
        newTestCase.apply(this, ['pluto', 'User@123', false]);
      });
    });
  });
});

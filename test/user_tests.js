var assert = require("assert");
var User = require("../lib/user");

describe('User tests', function() {
  describe('test get name method', function () {
    it('name should be', function () {
      var user = new User('west');
      assert.equal('west', user.getName());
    });
  });
});

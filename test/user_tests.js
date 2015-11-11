var assert = require("assert");
var User = require("../lib/user");

describe('User tests', function() {
  describe('test get name method', function () {
    it('name should be (uid:049b87d5-2e97-48ad-8cf1-5e1031d14c62)', function () {
      var user = new User('west');
      assert.equal('west', user.getName());
    });
  });
});

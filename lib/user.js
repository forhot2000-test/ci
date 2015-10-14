function User(name) {
	this.name = name;
}

User.prototype = {
	print: function() {
		console.log(this.name);
	},

	getName: function() {
		return this.name;
	},

	setName: function(name) {
		this.name = name;
	}
};

module.exports = User;

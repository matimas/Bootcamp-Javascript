const printer = {
	name: 'name',
	printName: function () {
		console.log(this.name);
	},
	printNameAfterSec: function () {
		this.printName();
		setTimeout(this.printName.bind(this), 3000);
	},
};
printer.printNameAfterSec();

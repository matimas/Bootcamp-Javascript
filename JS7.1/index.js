const array = [3, 4, 4, 3, 6, 3];
const uniqueArray = array.filter(function (item, pos) {
	return array.indexOf(item) == pos;
});

console.log(uniqueArray);

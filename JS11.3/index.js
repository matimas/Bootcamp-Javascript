const data = [
	{
		name: 'John',
		birthday: '1-1-1995',
		favoriteFoods: {
			meats: ['hamburgers', 'sausages'],
			fish: ['salmon', 'pike'],
		},
	},
	{
		name: 'Mark',
		birthday: '10-5-1980',
		favoriteFoods: {
			meats: ['hamburgers', 'steak', 'lamb'],
			fish: ['tuna', 'salmon', 'barracuda'],
		},
	},
	{
		name: 'Mary',
		birthday: '1-10-1977',
		favoriteFoods: {
			meats: ['ham', 'chicken'],
			fish: ['pike'],
		},
	},
	{
		name: 'Thomas',
		birthday: '1-10-1990',
		favoriteFoods: {
			meats: ['bird', 'rooster'],
			fish: ['salmon'],
		},
	},
	{
		name: 'Mary',
		birthday: '1-10-1977',
		favoriteFoods: {
			meats: ['hamburgers', 'lamb'],
			fish: ['anchovies', 'tuna'],
		},
	},
];

const getNames = (arr) => {
	const names = arr.map((element) => {
		return { name: element.name };
	});
	return names;
};

const bornBefore = (arr) => {
	const objArr = [];
	arr.forEach((element) => {
		const born_year = element.birthday.slice(element.birthday.length - 4);
		if (born_year < 1990) {
			objArr.push(element);
		}
	});
	return objArr;
};

const diffFoods = (arr) => {
	const obj = {};
	arr.forEach((element) => {
		element.favoriteFoods.meats.forEach((ele) => {
			if (obj[ele]) {
				obj[ele] = obj[ele] + 1;
			} else {
				obj[ele] = 1;
			}
		});
		element.favoriteFoods.fish.forEach((ele) => {
			if (obj[ele]) {
				obj[ele] = obj[ele] + 1;
			} else {
				obj[ele] = 1;
			}
		});
	});
	return obj;
};

console.log(getNames(data));
console.log(bornBefore(data));
console.log(diffFoods(data));

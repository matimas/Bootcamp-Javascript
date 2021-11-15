const newReleases = [
	{
		id: 70111470,
		title: 'Die Hard',
		boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
		uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
		rating: [4.0],
		bookmark: [],
	},
	{
		id: 654356453,
		title: 'Bad Boys',
		boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
		uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
		rating: [5.0],
		bookmark: [{ id: 432534, time: 65876586 }],
	},
	{
		id: 65432445,
		title: 'The Chamber',
		boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
		uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
		rating: [4.0],
		bookmark: [],
	},
	{
		id: 675465,
		title: 'Fracture',
		boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
		uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
		rating: [5.0],
		bookmark: [{ id: 432534, time: 65876586 }],
	},
];
///forEach loop
const ForE = (arr) => {
	console.log('made by forEach loop');
	const arr_of_obj = [];
	arr.forEach((element) => {
		arr_of_obj.push({ id: element.id, name: element.title });
	});
	return arr_of_obj;
};

//map loop
const Mymap = (arr) => {
	console.log('made by map loop');
	const arr_of_obj = arr.map((element) => {
		return { id: element.id, name: element.title };
	});
	return arr_of_obj;
};
console.log(ForE(newReleases));
console.log(Mymap(newReleases));

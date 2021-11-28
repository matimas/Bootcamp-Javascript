const users = [
	{
		id: 167464,
		firstName: 'Jimmy',
		lastName: 'Arnold',
		email: 'jimmya@gmail.com',
	},
	{
		id: 578447,
		firstName: 'Martha',
		lastName: 'Goldman',
		email: 'gold@hotmail.com',
	},
	{
		id: 864578,
		firstName: 'Tim',
		lastName: 'Burton',
		email: 'timmy.hotmail.com',
	},
];

const ol = document.createElement('ol');
ol.style.listStyleType = 'none';
console.log('dfczczxc', ol);
users.forEach((element) => {
	const li = document.createElement('il');
	li.dataset['id'] = element.id;
	li.innerText = element.firstName + ' ' + element.lastName;
	ol.appendChild(li);
});

const div = document.querySelector('div');
div.appendChild(ol);
div.style.backgroundColor = '#FFFF09';
div.style.alignItems = 'center';

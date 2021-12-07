const getIDs = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ data: [532, 543, 753, 1, 5] });
		}, 1500);
	});

const getRecipe = (recipeID) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(ID) => {
				const recipe = {
					title: 'Fresh tomato pasta',
					publisher: 'mati misganow',
				};
				resolve(`${ID}: ${recipe.title}--${recipe.publisher}`);
			},
			1500,
			recipeID,
		);
	});
};
async function getData() {
	const rand = Math.floor(Math.random() * 5);
	try {
		const res1 = await getIDs();
		const res2 = await getRecipe(res1.data[rand]);
		console.log(res1.data);
		console.log(res2);
	} catch (error) {
		console.log(error);
	}
}
getData();

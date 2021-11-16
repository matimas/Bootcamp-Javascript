const candyStore = {
	candies: [
		{
			id: 'as12f',
			name: 'mint gum',
			price: 2,
			amount: 2,
		},
		{
			id: '5hd7y',
			name: 'twix',
			price: 5,
			amount: 4,
		},
	],
	cashRegister: 200,
};

const getCandy = (candyStore, id) => {
	const candi = candyStore.candies.filter((candy) => candy.id === id);
	return candy[0];
};
const getPrice = (candyStore, id) => {
	const candy = candyStore.candies.filter((candy) => candy.id === id);
   const price = candy[0].price;
	return { id:id, price:price} ;
};

const addCandy = (candyStore, id, name, price, amount) => {
	candyStore.candies.push({ name: name, id: id, price: price, amount: amount });
	console.log(candyStore.candies);
};



const buy = (candyStore, id) => {
	candyStore.candies.forEach((candy) => {
		if (candy.id === id) {
			candy.amount--;
			candyStore.cashRegister += candy.price;
		}
	});
	console.log(candyStore);
};
console.log(getPrice(candyStore, '5hd7y'));

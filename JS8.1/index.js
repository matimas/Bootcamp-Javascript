const book = {
	Psize: '50',
	name: '"i found the sparks"',
	author: 'mati misg',
	published: '1987',
	available: true,
};

console.log(book.Psize);

const bookShow = (book) => {
	let the_book = book;
	return `The book ${the_book.name} was wriiten by ${the_book.author} in the year ${the_book.published}`;
};

console.log(bookShow(book));

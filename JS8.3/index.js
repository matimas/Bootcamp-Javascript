const book1 = {
	name: 'object',
	author: 'j',
	year: '1966',
};
const book2 = {
	name: 'arr',
	author: 'js',
	year: '1986',
};

const bookUtils = {
	getFirstPublished(book1, book2) {
		if (book1.year > book2.year) {
			return book2;
		}
		return book1;
	},
	setNewEdition(book, year) {
		book.year = year;
	},
	setLanguage(book, language) {
		book.language = language;
	},
	setTranslation(book, language, translator) {
		book.translator = language;
	},
	setPublisher(book, name, loca) {
		book.publisher = { loca: loca, name: name };
	},
	isSamePublisher(book1, book2) {
		if (
			book1.publisher.name == book2.publisher.name &&
			book1.publisher.loca === book2.publisher.loca
		) {
			return true;
		}
		return false;
	},
};

bookUtils.getFirstPublished(book1, book2);

bookUtils.setNewEdition(book1, 2021);
console.log(book1);

bookUtils.setLanguage(book1, book1.year);
console.log(book1, 2021);

bookUtils.setLanguage(book1, book1.year);
console.log(book1, 'English');

bookUtils.setTranslation(book1, 'spanish', 'translator');
console.log(book1);

bookUtils.setPublisher(book1, book1.name, 'Tel-aviv');
bookUtils.setPublisher(book2, book2.name, 'Tel-aviv');
console.log(book1);
console.log(book2);

console.log(bookUtils.isSamePublisher(book1, book1));
console.log(bookUtils.isSamePublisher(book1, book2));

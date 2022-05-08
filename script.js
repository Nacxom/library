let myLibrary = [];

// function Book
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${read}.`;
	};
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

// Si quiero agregar un libro como objeto, entonces:
// const nombreLibro = new Book(`1984`,`George Orwell`,328,true);




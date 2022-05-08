// Library list array
let myLibrary = [];

// Object constructor Books
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${read}.`;
	};
}

// Store new books to the library list array
function addBookToLibrary(book) {
	myLibrary.push(book);
}
// Display all books from the library list array
function displayBooks(myLibrary) {
	const bookList = document.querySelector('.bookList');

	for(let i = 0 ; i < myLibrary.length ; i++){
		const bookCard = document.createElement('div');
		bookCard.classList.add('card');
		bookCard.classList.add('col');
		const bookTitle = document.createElement('div');
		bookTitle.classList.add('card-title');
		const bookAuthor = document.createElement('div');
		bookAuthor.classList.add('card-author');
		const bookPages = document.createElement('div');
		bookPages.classList.add('card-pages');
		const bookRead = document.createElement('div');
		bookRead.classList.add('card-read');
		
		bookList.appendChild(bookCard);
		bookCard.appendChild(bookTitle);
		bookCard.appendChild(bookAuthor);
		bookCard.appendChild(bookPages);
		bookCard.appendChild(bookRead);

		bookTitle.textContent = `Title: ${myLibrary[i].title}`;
		bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
		bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
		bookRead.textContent = `Already read: ${myLibrary[i].read}`;
	}
}

// Manually adding some books for test
const book1 = new Book(`1984`, `George Orwell`, 328, true);
addBookToLibrary(book1);

const book2 = new Book(`LOTR`, `Tolkien`, 657, true);
addBookToLibrary(book2);

// crear appendChild ()
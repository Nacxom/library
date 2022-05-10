// DOM
const form = document.querySelector('#form');
const showFormBtn = document.querySelector('#showForm'); //Btn to show form
showFormBtn.addEventListener('click', showForm);
const addBookBtn = document.querySelector('#addBookBtn'); //Btn to add book
addBookBtn.addEventListener('click', storeBooks);
addBookBtn.addEventListener('click', displayBooks);
addBookBtn.addEventListener("click", hideForm);

// Library list array
let myLibrary = [];

// Object constructor Books
let idcounter = 0;	
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = idcounter++;
	this.info = function () {
		return `ID:${idcounter}, Title:${title} by ${author}, ${pages} pages. Read? ${read}.`;
	};
}

// Store new books to the library list array
function storeBooks() {
	const bookTitle = document.querySelector('#bookTitle');
	const bookAuthor = document.querySelector('#bookAuthor');
	const bookPages = document.querySelector('#bookPages');
	const bookRead = document.querySelector('#bookRead');
	// Create New Book Object using object constructor
	const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
	// Store new book to library
	myLibrary.push(newBook);
}

// Display all books from the library list array
function displayBooks() {
	const bookList = document.querySelector('.bookList');
	// Reset List
	bookList.innerHTML = ``;
	for(let i = 0 ; i < myLibrary.length ; i++){
		// book card. class card (style), col (bootstrap), data (id card to delete)
		const bookCard = document.createElement('div');
		bookCard.classList.add('card', 'col', 'data');
		// book title, author, pages, read status
		const bookTitle = document.createElement('div');
		bookTitle.classList.add('card-title');
		const bookAuthor = document.createElement('div');
		bookAuthor.classList.add('card-author');
		const bookPages = document.createElement('div');
		bookPages.classList.add('card-pages');
		const bookRead = document.createElement('div');

		// Remove Book
		const bookRemove = document.createElement('button');
		bookRemove.classList.add('card-btn','btn', 'btn-danger');
		bookRemove.textContent = `Remove Book`;
		bookRemove.addEventListener('click', removeBook);

		// Create New Book Card
		bookList.appendChild(bookCard);
		bookCard.appendChild(bookTitle);
		bookCard.appendChild(bookAuthor);
		bookCard.appendChild(bookPages);
		bookCard.appendChild(bookRead);
		bookCard.appendChild(bookRemove);

		bookRemove.dataset.id = `${myLibrary[i].id}`;
		bookTitle.textContent = `Title: ${myLibrary[i].title}`;
		bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
		bookPages.textContent = `Pages: ${myLibrary[i].pages}`;

		if(myLibrary[i].read) {
			bookRead.textContent = `Already read: yes`;
		} else {
			bookRead.textContent = `Already read: no`;
		}
	}
}

function removeBook(e){
	myLibrary = myLibrary.filter((book) => book.id != `${Number(e.target.dataset.id)}`);
	console.log(myLibrary);
	displayBooks();
}


// Show Form Function
function showForm(){
	form.setAttribute('style', 'transform: scale(1)');
}

// Hide Form Function
function hideForm(){
	form.setAttribute('style', 'transform: scale(0)');
}


const lotr = new Book(`LOTR`, `TOLKIEN`, 1178, true);
const aa = new Book(`a`,`a`,1,false);
const bb = new Book(`b`,`b`,2,false);
const cc = new Book(`c`,`c`,3,false);
const dd = new Book(`d`,`d`,4,false);
myLibrary.push(lotr);
myLibrary.push(aa);
myLibrary.push(bb);
myLibrary.push(cc);
myLibrary.push(dd);
displayBooks();



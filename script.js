// DOM
const form = document.querySelector('form');
const showFormBtn = document.querySelector('#showFormBtn');	//Btn to show form
const addBookBtn = document.querySelector('#addBookBtn'); //Btn to add book

addBookBtn.addEventListener('click', addBookToLibrary); 

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
	const bookTitle = document.querySelector('#bookTitle');
	const bookAuthor = document.querySelector('#bookAuthor');
	const bookPages = document.querySelector('#bookPages');
	const bookRead = document.querySelector('#bookRead');
	let bookReadBoolean;
	if(bookRead.checked){
		bookReadBoolean = true;
	} else {
		bookReadBoolean = false
	}

	const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookReadBoolean);

	console.log(bookTitle.value);
	console.log(bookAuthor.value);
	console.log(bookPages.value);
	
	myLibrary.push(newBook);
	displayBooks(myLibrary);
}
// Display all books from the library list array
function displayBooks(myLibrary) {
	const bookList = document.querySelector('.bookList');
	// Reset List
	bookList.innerHTML = ``;
	for(let i = 0 ; i < myLibrary.length ; i++){
		// book card. class card (style), col (bootstrap), data (id card to delete)
		const bookCard = document.createElement('div');
		bookCard.classList.add('card', 'col', 'data');
		bookCard.dataset.id = `${i}`;
		// book title, author, pages, read status
		const bookTitle = document.createElement('div');
		bookTitle.classList.add('card-title');
		const bookAuthor = document.createElement('div');
		bookAuthor.classList.add('card-author');
		const bookPages = document.createElement('div');
		bookPages.classList.add('card-pages');
		const bookRead = document.createElement('div');
		bookRead.classList.add('card-read');
		// Remove book button element, class, text content and event listener
		const bookRemove = document.createElement('button');
		bookRemove.classList.add('card-btn','btn', 'btn-danger');
		bookRemove.textContent = `Remove Book`;
		bookRemove.addEventListener('click', () => {
			myLibrary.splice(i,1);
			displayBooks(myLibrary);
		});


		bookList.appendChild(bookCard);
		bookCard.appendChild(bookTitle);
		bookCard.appendChild(bookAuthor);
		bookCard.appendChild(bookPages);
		bookCard.appendChild(bookRead);
		bookCard.appendChild(bookRemove)

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


// Style form

// function showForm(){
// 	form.setAttribute(`style`, `visibility: visible`);
// }
// function hideForm(){
// 	form.setAttribute(`style`, `visibility: hidden`);
// }

// showFormBtn.addEventListener("click", showForm);
// addBookBtn.addEventListener("click", hideForm);





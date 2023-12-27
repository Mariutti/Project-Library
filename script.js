function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isReaded = false;
}

const lordOfTheRings = new Book("Lord of the Rings", "J.R.R. Tolkien", 1178);

lordOfTheRings.isReaded = true;

console.log(lordOfTheRings.title);
console.log(lordOfTheRings.author);

Book.prototype.info = function () {
	return `${this.title} by ${this.author}, ${this.pages} pages, ${
		this.isReaded ? "already readed" : "not read yet"
	}`;
};

console.log(lordOfTheRings.info());
const myLibrary = [];

const newBook = new Book();
myLibrary.push(lordOfTheRings);
myLibrary.push(new Book("The Hobbit", "J.R.R.Tolkien", 450));

function addBookToLibrary(book) {
	myLibrary.push(book);
	// do stuff here
}

function bookList() {
	myLibrary.map((book) => {
		const ulBooks = document.getElementById("bookList");
		const li = document.createElement("li");
		li.innerHTML = `${book.title}`;
		ulBooks.appendChild(li);
	});
}

const bookTitle = document.getElementById("bookTitle");

const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", addBook);

function addBook(event) {
	event.preventDefault();
	let input = document.getElementById("bookTitle");
	let result = document.getElementsByClassName("card-container")[0];
	let p = document.createElement("p");
	// p.innerText = input.value;

	// p.innerHTML = ``

	// result.appendChild(p);
}
// bookList();

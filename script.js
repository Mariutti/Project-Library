window.onload = bookList;

const myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isReaded = false;
}

Book.prototype.info = function () {
	return `${this.title} by ${this.author}, ${this.pages} pages, ${
		this.isReaded ? "already readed" : "not read yet"
	}`;
};

const lordOfTheRings = new Book("Lord of the Rings", "J.R.R. Tolkien", 1178);

lordOfTheRings.isReaded = true;

const newBook = new Book();
myLibrary.push(lordOfTheRings);
myLibrary.push(new Book("The Hobbit", "J.R.R.Tolkien", 450));

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function bookList() {
	const ulBooks = document.querySelector(".card-container");
	// ulBooks.innerHTML = ''
	myLibrary.map((book) => {
		const li = document.createElement("li");
		li.classList.add("card");
		li.innerHTML = `
		<h3>Title: ${book.title}</h3>
		<p>Author: ${book.author}</p>
		<p>number of pages: ${book.pages}</p>
		<label class="check">
			<span>Already readed?</span>
			<input type="checkbox" name="isReaded" id="isReaded" class="isReaded" ${book.isReaded? 'checked': ''}>	
		</label>
		`;

		ulBooks.appendChild(li);
	});
}

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", addBook);

function addBook(event) {
	event.preventDefault();
	const bookTitle = document.getElementById("bookTitle");
	const bookAuthor = document.getElementById("bookAuthor");
	const bookPages = document.getElementById("bookPages");

	const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);

	addBookToLibrary(newBook);

	bookList();
}

const checkBtn = document.querySelectorAll('.isReaded')
checkBtn.forEach(btn => {
	btn.addEventListener('click', checkIsReaded)
})

function checkIsReaded(e){
	console.log(e.target)
}

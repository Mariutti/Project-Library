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

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function bookList() {
	const ulBooks = document.querySelector(".card-container");
	ulBooks.innerHTML = "";
	let value = 0;

	myLibrary.forEach((book) => {
		const li = document.createElement("li");
		li.classList.add("card");
		li.innerHTML = `
		<h3>Title: ${book.title}</h3>
		<p>Author: ${book.author}</p>
		<p>number of pages: ${book.pages}</p>
		<div>
		<span>Already readed?</span>
		<label class="check">
			<input type="checkbox" name="isReaded" class="isReaded teste teste2" ${
				book.isReaded ? "checked" : ""
			} value=${value++}>	
		</label>
		</div>
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

	const newBook = new Book(
		bookTitle.value,
		bookAuthor.value,
		Number(bookPages.value)
	);

	if (
		bookTitle.value !== "" &&
		bookAuthor.value !== "" &&
		bookPages.value !== ""
	) {
		addBookToLibrary(newBook);

		bookList();
		bookTitle.value = "";
		bookAuthor.value = "";
		bookPages.value = "";
	}
}

function clickCard(e) {
	const target = e.target;
	console.log(target);

	let li = target.parentNode;
	if (target.classList.contains("isReaded")) {
		const book = myLibrary[target.value];
		console.log(book.title, "isReaded was", book.isReaded);
		book.isReaded = !book.isReaded;
		console.log(book.title, "isReaded is now", book.isReaded);
		console.log(book);
		return;
	}

	function checkParent(node) {
		if (!node.classList.contains("card")) {
			li = node.parentNode;
			checkParent(li);
		}
	}
	checkParent(li);
	
	console.log(li);
	const childList = li.children;
	const bookNumber = li.lastElementChild.lastElementChild.children[0].value;
	const book = myLibrary[bookNumber];

	const p = document.querySelector(".card-info");
	p.innerText = book.info();
}

const cardContainer = document.querySelector(".card-container");

cardContainer.addEventListener("click", clickCard);

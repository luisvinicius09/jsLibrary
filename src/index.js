const hobbit = {
  title: 'The Hobbit',
  author: 'Tolkien',
  pages: 1200,
  read: true,
};

const potter = {
  title: 'Harry Potter',
  author: 'some lady',
  pages: 600,
  read: true,
};

const matrix = {
  title: 'Matrix',
  author: 'wachowsky',
  pages: 400,
  read: true,
};

const rings = {
  title: 'Lord of Rings',
  author: 'JRR Tokien',
  pages: 500,
  read: true,
};

const myLibrary = [hobbit, potter, matrix, rings];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}


function displayBooks(arr) {
  const books = arr.map((book, index) => (
    `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><button class="btn" id=${book.read} onClick='toggleRead(${index})' value="Read">${book.read}</button></td>
    <td><button class='btn btn-delete' type='button' onClick='deleteBook(${index})'>Delete</button></td>
    </tr>`
  )).join('\n');
  document.querySelector('tbody').innerHTML = books;
}

const submitBtn = document.getElementById('submit').addEventListener('click', () => {
  addBookToLibrary();
  displayBooks(myLibrary);
});

displayBooks(myLibrary);

function toggleRead(id) {
  for (let i = 0; i < myLibrary.length; i += 1) {
    if (i === id) {
      if (myLibrary[i].read) {
        myLibrary[i].read = false;
        displayBooks(myLibrary);
      } else {
        myLibrary[i].read = true;
        displayBooks(myLibrary);
      }
    }
  }
}

function deleteBook(id) {
  myLibrary.splice(id, 1);
  displayBooks(myLibrary);
}

function showForm() {
  document.getElementById('formd').style.display = 'block';
}

const addBtn = document.getElementById('addBtn');
addBtn.setAttribute('type', 'button');
addBtn.addEventListener('click', e => { e.target.style.display = 'none'; });
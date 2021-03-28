let hobbit = {
  title: 'The Hobbit',
  author: 'Tolkien',
  pages: 1200,
  read: true
}

let potter = {
  title: 'Harry Potter',
  author: 'some lady',
  pages: 600,
  read: false
}

let matrix = {
  title: 'Matrix',
  author: 'wachowsky',
  pages: 400,
  read: true
}

let rings = {
  title: 'Lord of Rings',
  author: 'JRR Tokien',
  pages: 500,
  read: true
}

myLibrary = [hobbit, potter, matrix, rings];


function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

submitBtn = document.getElementById('submit').addEventListener('click', () => {
  addBookToLibrary();
  displayBooks(myLibrary);
});

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value
  
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks(arr) {
  let books = arr.map((book, index) => {
    return (
      `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
        <td><button class='btn' type='button' >Toggle read</button></td>
        <td><button class='btn' type='button' onClick='deleteBook(${index})'>Delete</button></td>
      </tr>`
    )
  }).join('\n')
  document.querySelector('tbody').innerHTML = books
}

displayBooks(myLibrary)

function deleteBook(id) {
  myLibrary.splice(id, 1)
  displayBooks(myLibrary)
}

function showForm() {
  document.getElementById('formd').style.display = 'block';
}

const addBtn = document.getElementById('addBtn')
addBtn.setAttribute('type', 'button');
addBtn.addEventListener('click', (e) => e.target.style.display = 'none');

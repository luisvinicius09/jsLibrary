let hobbit = {
  title: 'The Hobbit',
  author: 'Tolkien',
  pages: 1200,
  read: false
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

submitBtn =  document.getElementById('submit').addEventListener('click', addBookToLibrary());

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  
  const book = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(book);


}




function elementsLoop(arr) {
  for(let i=0; i < arr.length; i++) {
    let content = document.querySelector('table');
    content.className = 'card'

    let title = document.getElementById('title')
    title.textContent = `${arr[i].title}`    
    let author = document.createElement('p')
    author.textContent = `${arr[i].author}`
    let pages = document.createElement('p')
    pages.textContent = `${arr[i].pages}`
    let read = document.createElement('p')
    read.textContent = `${arr[i].read}`

    content.appendChild(title)
    content.appendChild(author)
    content.appendChild(pages)
    content.appendChild(read)
    content.classList.add('content');
    document.getElementById('container').appendChild(content)
    
  }
}

elementsLoop(myLibrary)


// const addBtn = document.createElement('#addBtn')
// addBtn.setAttribute('type', 'button');
// addBtn.innerHTML = `${myLibrary.read ? 'Read' : 'Unread'}`

// }); //target is the NODE ITSELF


function showForm() { // eslint-disable-line no-unused-vars
  document.getElementById('formd').style.display = 'block';
  
}

const addBtn = document.getElementById('addBtn')
addBtn.setAttribute('type', 'button');
addBtn.addEventListener('click', (e) => e.target.style.display = 'none');

// var person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }

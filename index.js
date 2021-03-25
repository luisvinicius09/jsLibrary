// let myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }



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


booksArray = [hobbit, potter, matrix, rings];

console.log(booksArray[0])


function elementsLoop(arr) {
  for(let i=0; i < arr.length; i++) {
    let div = document.createElement('div');
    div.className = 'card'

    let title = document.createElement('p')
    title.innerHTML = arr[i].title

    let author = document.createElement('p')
    author.innerHTML = arr[i].author

    let pages = document.createElement('p')
    pages.innerHTML = arr[i].pages
    
    let read = document.createElement('p')
    read.innerHTML = arr[i].read

    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages)
    div.appendChild(read)
    document.getElementById('container').appendChild(div)
    
  }
}

elementsLoop(booksArray)


// var person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }

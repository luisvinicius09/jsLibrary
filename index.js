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


booksArray = [hobbit, potter, matrix];

console.log(booksArray[0])

arr = [li, li2, li3, li4]

function elementsLoop(arr) {
  for(let i=0; i < arr.length; i++) {
    let li = document.createElement('li')
    let li2 = document.createElement('li')
    let title = document.createTextNode(arr[i].title)
    let author = document.createTextNode(arr[i].author)
    li.appendChild(title)
    li2.appendChild(author)
    document.getElementById('container').appendChild(li)
    document.getElementById('container').appendChild(li2)
    
  }
}

elementsLoop(booksArray)




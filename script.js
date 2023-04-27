let myLibrary = []

class Book {
  constructor(title,author,page,isRead)
  this.title = title
  this.author = author
  this.page = page
}

const harryPotter = new Book('harry potter', 'me', '234')
const banana = new Book('banana', 'You', '234')
console.log(harryPotter, banana)
myLibrary.push(harryPotter, banana)
console.log(myLibrary)

function addBookToLibrary() {}

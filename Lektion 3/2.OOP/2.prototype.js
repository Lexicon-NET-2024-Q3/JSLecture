function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
    this.revised = false 

    this.read = () => console.log('read book')
}

const book = new Book('Banana', 'Kalle', 1910)

const book2 = new Book('C#', 'Nisse', 2010)

console.log(book)
console.log(book2)

const arr = []
const obj = {}

console.log(arr)
console.log(obj)

// book.read()

Book.prototype.read = function(){
    console.log('read book from prototype')
}

book.read() 
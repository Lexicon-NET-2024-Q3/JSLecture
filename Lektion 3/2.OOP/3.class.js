class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }

    summary(){
        return `${this.title} by ${this.author} from the year ${this.year}`
    }
}

const book = new Book('C#', 'Kalle', 2010)

// console.log(book)
// console.log(book.summary())


class User{
    //Private field
    #firstName

    //Public property
    get firstName(){
        return this.#firstName
    }
    set firstName(value){
        this.#firstName = value
    }

    //Constructor
    constructor(firstName){
        this.#firstName = firstName
    }

    //Methods

    //Private
    #privateFunc(){
        console.log('from private')        
    }

    //Public
    publicFunc(){
        console.log('from public')
        this.#privateFunc()
    }
}

const user = new User('Kalle')
console.log(user)
user.publicFunc()
//user.#privateFunc()

console.log(user.firstName)
user.firstName = 'Nisse'
user.lastName = 'Nilsson'
console.log(user)
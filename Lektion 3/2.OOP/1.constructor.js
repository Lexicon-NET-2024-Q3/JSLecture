const banana = {
    name:'banana',
    price: 12,
    description: 'Bendy berry',
    eat: function(){
        console.log(`You eat the ${this.name}`)
    },
    eat2(){
        console.log(`You eat the ${this.name}`)
    }
}
// banana.eat()
// banana.eat2()

//Factory function

function createProduct(name, price, desc){
    return{
        name,
        price,
        desc,
        eat(){
            console.log(`You eat the ${this.name}!`)
        }
    }
}

const prod = createProduct('orange', 15, 'round fruit')
const prod2 = createProduct('kiwi', 10, "fuzzy fruit")

// console.log(prod)
// console.log(prod2)

// prod.eat()
// prod2.eat()

// prod.test = {firstName: 'Kalle'}
// console.log(prod)
// console.log(prod2)

//Constructor function

function Product(name, price, desc){
    this.prodName = name
    this.price = price
    this.desc = desc
}

//Product prodBanana = new Product("Banana", 12, "Big bendy berry") i C#
const prodBanana = new Product('Banana', 12, 'Big bendy berry')
// console.log(prodBanana)

const prodCar = new Product()
// console.log(prodCar)

function ProductPrivate(name, price, desc){
    //Private
    let discount = 1
    
    //Public prop
    Object.defineProperty(this, 'discount', {
        get: function(){
            return discount
        },
        set: (value) => discount = value < 0 ? 0 : value
    })


    this.prodName = name
    this.price = price
    this.desc = desc

    this.test = function(){
        console.log(discount)
    }
}

const privProd = new ProductPrivate('Bread', 10, 'Not a fruit')
//privProd.discount = 5 
console.log(privProd)
privProd.test()


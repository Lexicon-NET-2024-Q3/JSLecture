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

class Admin extends User{
    constructor(firstName, salary){
        super(firstName)
        this.salary = salary
    }

    publicFunc(){
        console.log('admin public func')
    }

    adminFunc(){
        console.log('admin func')
        this.publicFunc()
        super.publicFunc()
    }
}

const admin = new Admin('Kalle', 20000)
console.log(admin)
//admin.publicFunc()
admin.adminFunc()
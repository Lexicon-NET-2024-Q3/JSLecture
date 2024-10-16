import User from "./Models/user.js"
import UserService from "./Services/userService.js"
import { validate, sendMessage} from "./Functions/functions.js"

const user = new User('KaLlE', 'KArLsSon', 'kalle@karlsson.com', 'password')
// console.log(user)

// UserService.signUp(user)

validate(user, u=>UserService.signUp(u))

sendMessage('Kalle', message => console.log(message))
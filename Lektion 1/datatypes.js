/*
Javascript Datatyper
------------------------------------------------------------
String = Text
Number = Tal, decimaltal, stora tal
Boolean = sant/falskt
null = Tomt, ingenting alls (sätts manuellt)
undefined = Tomt, har ej blivit definierad ännu (automatisk)
Object = ett objekt/klass som innehåller ett eller flera värden
Array = Lista med ett eller flera värden
*/

// var = global variable - kommer åt överallt

// let = lokal variable - kommer bara åt i samma scope
//const = lokal konstant variabel - kan inte skrivas över (finns undantag)

// let text = null
// let text2

// console.log(text)
// console.log(text2)

let firstName = "Kalle" //Undvik " "
let lastName = 'Karlsson' // Använd ' '

let age = 10

let fullName = firstName + ' ' + lastName
let fullName2 = `${firstName} ${lastName}`
//let fullName3 = '${firstName} ${lastName}'

// console.log(firstName)
// console.log(lastName)
// console.log(fullName)
// console.log(fullName2)
// //console.log(fullName3)

// firstName = 5
// firstName = []
// firstName = {}
// firstName = 'Nisse'

// console.log(firstName)
// console.log(firstName.length)
// console.log(firstName[0])

// let values = fullName.split(' ')
// console.log(values)



/*Numbers
-------------------------

Math operators

+ lägg till
- ta bort
* gångra
** upphöjt i
/ dela
% division remainder 

++ öka med 1
-- minska med 1

= lika med
+= lägg till
-= ta bort
*= gångra och lägg till
/= dela och lägg till
%= division remainder

*/

let nr1 = 10
let nr2 = 2.5

// console.log(nr1)
// console.log(nr2)

//console.log(nr1 = nr1+1)
// console.log(nr1 += 1)
// console.log(nr1++)

// let dataType
// console.log(typeof dataType);

// dataType = 'Text'
// console.log(typeof dataType);

// dataType = 45
// console.log(typeof dataType);

// dataType = true
// console.log(typeof dataType);

// dataType = null
// console.log(typeof dataType); //Bugg bör inte bli object, kommer sannolikt inte fixas

// dataType = {}
// console.log(typeof dataType);

// dataType = []
// console.log(typeof dataType);

let number = 13
let string = 'björn'

//två == jämför värde
console.log(number == string)

//tre === jämför värde OCH typ
console.log(number === string)

let res = number + string
console.log(res)

let res2 = number + +string //+ beter sig som number
console.log(res2)


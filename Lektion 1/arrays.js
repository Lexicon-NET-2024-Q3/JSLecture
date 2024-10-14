//Array - lista med ett eller flera värden

// names = [] //Gör ej
// var names = [] //Gör ej
// let names = [] //Gör
// const names = [] //Gör

//Gör ej
const multiArray = ['12', 12, true, {firstName: 'Kalle'}, [1,2,3,4,5,6], null]
//console.log(multiArray)

//Gör så
const numbers = [1,2,3,4,5,6,7]

//Gör så
const users = [
    {firstName: 'Kalle', lastName: 'Karlsson', age: 36},
    {firstName: 'Anna', lastName: 'Andersson', age: 58},
    {firstName: 'Sten', lastName: 'Stensson', age: 97},
    {firstName: 'Potatis', lastName: 'Stensson', age: 97},
    {firstName: 'Huggsnok', lastName: 'Stensson', age: 97}
]

// console.log(users[0]);
// console.log(users[0].firstName);

const names = ['Kalle', 'Anna', 'Sten']

console.log(names)

//Lägger till värdet först i arrayen
names.unshift('Kajsa')
console.log(names)

//Tar bort första värdet
names.shift()
console.log(names)

//Lägger till värdet sist i arrayen
names.push('Kajsa')
console.log(names)

//Tar bort sista värdet i arrayen
names.pop()
console.log(names)

//names[0] = 'Nisse'
console.log(names)

//Sökning på ej existerande värde resulterar i -1
const index = names.indexOf('Nisse')
console.log(index)


//Tar bort värdet men inte positionen, positionen blir empty/undefined
// delete names[0]
// console.log(names)
// console.log(typeof names[0])


//Splice börjar på en position (första värdet), tar bort x (andra värdet) och sätter in återstående värden på deras platser
// console.log(names)
// names.splice(1,2, 'Nytt namn', 'Stefan')

// console.log(names);
// names.splice(1,0,'Nytt namn igen', 'Lisa')
// console.log(names)

// names.splice(1,3)
// console.log(names);

//Filter == Where
console.log(names)
const notKalle = users.filter(u=>u.firstName !== 'Kalle')
console.log(notKalle)

//Map == Select
const ages = users.map(u=>u.age)
console.log(ages);

//Filter och Map
const notKallesAge = users.filter(u=>u.firstName != 'Kalle')
.map(u=>u.age)
console.log(notKallesAge)


users.forEach(function(user){
    console.log(user.firstName)
})

users.forEach(u=>console.log(u.firstName))

users.forEach(u=>{
    document.body.innerHTML += `<p> Name: ${u.firstName} </p>`
})
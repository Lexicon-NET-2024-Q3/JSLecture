/*
&& och
|| eller
! inte
< mindre än
> större än
<= mindre än eller lika med
>= större än eller lika med

!== om det inte är lika med och inte har samma datatyp
!= om det inte är lika med
*/

//Ternary
//condition ? expression : expression

// let number = 14
// let string = '14'

// let result = number > +string? 'true' : {name:'Kalle'}
// console.log(result)

// if(number > +string){
//     let result = true
//     console.log(result)
// }
// else{
//     let result = 'Kalle'
//     console.log(result)
// }



// let string = '12'
// let number = 12

// if(number !== string){
//     console.log(false)
// }
// else{
//     console.log(true)
// }


const car = {
    color: 'red',
    brand: 'volvo'
}

console.log(car)

switch(car.color){
    case 'red':
        console.log('Color is red')
        break
}
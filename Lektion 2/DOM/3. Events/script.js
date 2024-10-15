const btnAlert = document.querySelector('#btnAlert');
const btn1 = document.querySelector('#btn1');
const loginForm = document.querySelector("#loginForm");
const output = document.querySelector('#output');
const square = document.querySelector('#square');

document.querySelectorAll('p')
.forEach(p=>p.addEventListener('click', (e)=>
    console.log('Working', e.target)
))

// btnAlert.addEventListener('click', function(e){
//     alert('event triggered!');
// })
// btnAlert.addEventListener('dblclick', function(e){
//     alert('event triggered!');
// })
// btnAlert.addEventListener('mousedown', function(e){
//     alert('event triggered!');
// })
// btnAlert.addEventListener('mouseup', function(e){
//     alert('event triggered!');
// })
// btnAlert.addEventListener('mouseenter', function(e){
//     alert('event triggered!');
// })
// btnAlert.addEventListener('mouseleave', function(e){
//     alert('event triggered!');
// })

// loginForm['firstName'].addEventListener('focus', function(){
//     console.log('focus')
//     this.classList.add('focus')
// })

// loginForm['firstName'].addEventListener('blur', function(e){
//     console.log('blur')
//     this.classList.add('blur')
// })

// loginForm['firstName'].addEventListener('change', function(){
//     console.log(this.value)
// })

// loginForm['firstName'].addEventListener('change', (e)=>{
//     console.log(e.target.value)
// })

// loginForm.addEventListener('submit', (e)=>{
//     e.preventDefault()

//     output.innerHTML += `<p>${e.target[0].value} ${e.target[1].value}`

//     e.target.reset()
// })

let counter = 1
btn1.addEventListener('click', ()=>{
output.innerHTML += `
<div>
<p> Hej: ${counter++} </p>
</div>
`
})

output.addEventListener('click', (e)=>{
    console.log(e.target)
    e.target.remove()
})

square.addEventListener('mousemove', e=>{
    // console.log(e)
    // console.log(e.offsetX)
    square.style.background = `rgb(${e.offsetY}, ${e.offsetX}, 0)`
})
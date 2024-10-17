import Item from "./item.js"

((todo)=>{
    const items = document.querySelector('#toDoItems')
    //console.log(items)

    todo.addItem = function(e) {
        e.preventDefault()
        
        const input = this['todoInput']
        //console.log(input.value)
        addItemToDOM(new Item(input.value, false))
        input.value = ''
    }

    function addItemToDOM(item){
        items.insertAdjacentHTML('beforeend',
            `
            <li class="list-group-item ${item.isChecked ? 'change' : ''}">
            ${item.text}
            <button class="btn btn-danger">X</button>
            </li>`)
        let lastChild = items.lastElementChild
        lastChild.addEventListener('click', change)
        lastChild.querySelector('button').addEventListener('click', remove)
    }

    function change(){
        this.classList.toggle('change')
    }
    function remove(){
        this.parentElement.remove()
    }

    todo.save = function(){
        let items = document.querySelectorAll('li')
        let res = Array.from(items).map(i=> new Item(i.childNodes[0].textContent,
            i.classList.contains('change')))

        localStorage.setItem('items', JSON.stringify(res))
    }

    todo.load = function(){
        let res =JSON.parse(localStorage.getItem('items'))
        console.log(res)
        res.forEach(i => addItemToDOM(i))
    }

})(window.todo = window.todo || {})

document.querySelector('#todoForm').addEventListener('submit', todo.addItem)
document.querySelector('#save').addEventListener('click', todo.save)
document.querySelector('#load').addEventListener('click', todo.load)


//console.log(window)
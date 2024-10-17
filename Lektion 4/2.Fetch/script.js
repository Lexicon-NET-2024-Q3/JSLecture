//HTTP request methods
//GET - Hämta data
//POST - Skicka data
//PUT - Uppdatera hela objektet
//PATCH - Uppdatera hela eller delar av objektet
//DELETE - Ta bort ett objekt 

const btnText = document.querySelector('#btnText')
const textOutput = document.querySelector('#text-output')

// btnText.addEventListener('click', function(){
//     fetch('text.txt')
//     .then(function(res){
//         console.log(res)
//         return res.text()
//     })
//     .then(function(data){
//         console.log(data)
//         textOutput.innerHTML = `<p>${data}</p>`
//     })    
// })

btnText.addEventListener('click', function() {
fetch('text.txt')
.then(res => res.text())
.then(data => textOutput.innerHTML = `<p>${data}</p>`)
.catch(err => console.log(err))
})




const btnJSON = document.querySelector('#btnJSON')
const JSONOutput = document.querySelector('#JSON-output')

const getJSON = () => {
    fetch('json.json')
    .then(res =>{
        if(res.ok)
            return res.json()
        throw new Error('Error when fetching from JSON')
    })
    .then(data =>{
        console.log(data)
        
        JSONOutput.inner = ''

        data.forEach(post =>{
            JSONOutput.innerHTML +=
            `
<div>
    <div class="card-body">
        <h3 class="card-title">${post.title}</h3>
        <p class="card-text">${post.body}</p>
    </div>
</div>

            `
        })
    })
    .catch(err=>console.log(err))
}


btnJSON.addEventListener('click', getJSON)


const btnGit = document.querySelector('#btnGit')
const gitOutput = document.querySelector('#Git-output')

const getGit = () =>{
    fetch('https://api.github.com/users/Lexicon-NET-2024-Q3/repos',{
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res =>{
        if(res.ok)
            return res.json()
        throw new Error('Failed to get response')
    })
    .then(data=>{
        console.log(data)

        gitOutput.innerHTML = ''

        data.forEach(repo =>{
            gitOutput.innerHTML +=
            `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">This repo is mainly written in ${repo.language}</p>
            <p class="card-text">This repo have been forked ${repo.forks_count} times </p>
            <a href="${repo.html_url}" class="card-link">${repo.name}</a>
            <a href="${repo.owner.html_url}" class="card-link">Owner</a>
        </div>
    </div>

            `
        })
    })
}

btnGit.addEventListener('click', getGit)
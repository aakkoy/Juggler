/* 
        Make a connection between client ---- server (NETLIFY cloud function)
        fetch(url)

        PATH TO ALL OF YOUR FUNCTIONS
        DOCS for any service tell how access the function cloud function
        from the client(web browser)
        /.netlify/functions/fn(name)
        /,netlify/functions/todos   path    route   function    todos.js
*/

/* async function getToDos(){
    const url = '/.netlify/functions/todos'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    data.forEach(item=> console.log(item))

    document.querySelector('#tagline').textContent = data 
}

getToDos() */

import { categoryTemplates } from "./templates/categories"
//  init app, load data, loop data, create the todos and them to the DOM.

async function appInit(){
    const res = await fetch('.netlify/functions/todos');
    const todos =  await res.json()
    const containerElement = document.createElement('div')
    let markup = ``
    todos.forEach(todo => {
        const template = categoryTemplates[todo.category](todo)
        markup += template
    })

    containerElement.innerHTML = markup
    document.querySelector('main').append(containerElement)
}

appInit()


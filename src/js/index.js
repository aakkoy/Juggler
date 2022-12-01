/* 
        Make a connection between client ---- server (NETLIFY cloud function)
        fetch(url)

        PATH TO ALL OF YOUR FUNCTIONS
        DOCS for any service tell how access the function cloud function
        from the client(web browser)
        /.netlify/functions/fn(name)
        /,netlify/functions/todos   path    route   function    todos.js
*/

async function getToDos(){
    const url = '/.netlify/functions/todos'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.path)
    document.querySelector('#tagline').textContent = data.path
}

getToDos();
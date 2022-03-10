// This is the code for the client application
// This does not contain the solution to the second assignment 

function createBookBox(book) {
    // This is to be replaced by the appropriate code to construct the HTML elements in JavsScript
    const li = document.createElement("LI")
    li.innerHTML = '<div class="bookbox"><img src="https://covers.openlibrary.org/b/id/9251896-L.jpg"><div><h2>Ubik</h2><h3>Philip K. Dick</h3></div><div><span class="star yellowstar">★</span><span class="star yellowstar">★</span><span class="star yellowstar">★</span><span class="star yellowstar">★</span><span class="star">★</span><span>(300)</span></div></div>'
    return li
}

function fillBooks(books) {
    console.log(books)
    const list = document.getElementById("listofbooks")
    list.innerHTML = ""
    for (const idx in books) {
        const li = createBookBox(books[idx])
        list.append(li)
    }
}

function loadAndFillBooks(search) {
    let query = ""
    if( search != undefined )
        query = `?search=${search}`

    fetch('/api/books'+query)
    .then(data => data.json())
    .then(books => { fillBooks(books) })
}

function addNewBook() {
    fetch("/api/books", {
        method: "POST",
        headers: {
            'content-type':'application/json;charset=utf-8'
        },
        body: JSON.stringify({title:"Bla"})
    })
}

function applySearch() {
    const input = document.getElementById("searchbox")
    console.log(input)
    const text = input.value
    loadAndFillBooks(text)
}

function installOtherEventHandlers() {
    // Events to open and close menus
    // ...

    // Events to call loadAndFillBooks with a new search value
    document.getElementById("searchbutton").onclick = applySearch
}

window.onload = () => {
    loadAndFillBooks() // If no parameter is given, search is undefined

    installOtherEventHandlers()
}


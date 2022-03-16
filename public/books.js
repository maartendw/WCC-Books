function fillBooks(books) {
    const lista = document.getElementById("listofbooks")
    lista.innerHTML = ""
    for (const idx in books) {
        const li = createBookBox(books[idx])
        lista.append(li)
        
    }
}


function createBookBox(book) {
    const li = document.createElement("LI")
    li.setAttribute('class', 'bookbox')
    
    //div with book content:
    const div = document.createElement("div")
    li.append(div)
    
    //book image:
    const img = document.createElement("img")
    img.src = book.image
    div.append(img)
    
    //title:
    const title = document.createElement("h3")
    title.innerText = book.title
    title.setAttribute('class', 'title')
    div.append(title)
    
    //author:
    const author = document.createElement("h3")
    author.innerText = book.authors // THIS DOES NOT WORK? ARRAY ITERATOR?
    div.append(author)

    // console.log(book.authors)
    
    //ratings:
    const yellowstar = document.createElement("span")
    yellowstar.setAttribute('class', 'yellowstar')
    const num_ys = book.rating
    yellowstar.innerText = '★'.repeat(num_ys)
    const star = document.createElement("span")
    star.setAttribute('class', 'star')
    const num_gs = 5 - num_ys 
    star.innerText = '★'.repeat(num_gs)
    div.append(yellowstar)
    div.append(star)

    const rating_num = document.createElement("span")
    rating_num.innerHTML = (' (' + book.numberrating +')<br>')
    div.append(rating_num)
    
    return li
}


function countCategories(books){
    let lookup = {};
    const items = books;
    let result = [];

    for (let item, i = 0; item = items[i++];) {
    let category = item.category;

    if (!(category in lookup)) {
        lookup[category] = 1;
        result.push(category);}
     else {
        lookup[category] += 1
    }
}
    const catsummary = document.getElementById("categorysummary")

    Object.keys(lookup).forEach(function(key) {
    console.log(key + ',' + lookup[key])
    const a = document.createElement("a")
    a.href = " "
    const p = document.createElement("p")

    a.innerText = key + ' (' + lookup[key] + ')'
    p.append(a)
    catsummary.append(p)

    //TO DO: SIZE CHANGE FOR COUNTS!! CSS?

  })    
}

function loadAndFillBooks(search) {
    let query = ""
    if( search != undefined )
        query = `?search=${search}`

    fetch('/api/books'+query)
    .then(data => data.json())
    .then(books => { fillBooks(books), countCategories(books)})
}

function applySearch() {
    const input = document.getElementById("searchbar")
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


//toggle for collapsable menus
function togglefunction(id) {
    let smenu = document.getElementById(id);
    if (smenu.className === "submenu") {
        smenu.className = ('submenu hidden');
    } else {
        smenu.className = "submenu";
    }
}
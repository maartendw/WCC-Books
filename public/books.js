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
    author.innerText = book.authors 
    div.append(author)

    
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

    
    //div and text for addremove wishlist
    const wishlistdiv = document.createElement('div')
    li.append(wishlistdiv)
    const addremove = document.createElement('em')
    addremove.innerHTML = "<br>Wish list:&nbsp;&nbsp;&nbsp;"
    wishlistdiv.append(addremove)
    
    //Add and remove buttons
    const add = document.createElement("button")
    wishlistdiv.append(add)
    add.innerText = 'Add'
    add.setAttribute("class", "addremovebook")
    add.addEventListener('click', () => {
        bookbox_addItem(title.innerText)
    });

    const remove = document.createElement("button")
    remove.innerText = 'Remove'
    remove.setAttribute("id", "addremovebook")
    remove.addEventListener('click', () => {
        bookbox_removeItem(title.innerText)
    });
    wishlistdiv.append(remove)
    
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
    const li = document.createElement("li")
    li.innerText = key + ' (' + lookup[key] + ')'
    catsummary.append(li)


  })    
}

function loadAndFillBooks(search) {
    let query = ""
    if( search != undefined )
        query = `?search=${search}`

    fetch('/api/books'+query)
    .then(data => data.json())
    .then(books => {fillBooks(books)})
}

function FillBooksCategories() {
    fetch('/api/books')
    .then(data => data.json())
    .then(books => {countCategories(books)})
}

function applySearch() {
    const input = document.getElementById("searchbar")
    const text = input.value
    loadAndFillBooks(text)
}

//function for searching books
function searchFunction() {
    let bookboxes = document.querySelectorAll('.bookbox');
    let booktitle = document.querySelectorAll('.title')
    let userinput = document.getElementById('searchbar').value;
    userinput = userinput.toLowerCase();
    for (let i = 0; i < bookboxes.length; i++) {
        if (booktitle[i].innerText.toLowerCase().includes(userinput)) {
            bookboxes[i].className = ("bookbox");
        } else {
            bookboxes[i].className = ("bookbox hidden");
        }
    }

}


//function for adding books from wishlist input
function addItem() {
    let wishlist = document.getElementById("wishlist_books");
    let book = document.getElementById("bookinput").value;
    const li = document.createElement("li");
    li.setAttribute("id", book.toLowerCase())
    if (!wishlist.innerText.toLowerCase().includes(book.toLowerCase())) {
        li.append(book);
        wishlist.appendChild(li);
    }
}

//function for adding books from bookbox
function bookbox_addItem(title) {
    let wishlist = document.getElementById("wishlist_books");
    const li = document.createElement("li");
    li.setAttribute("id", title.toLowerCase())
    if (!wishlist.innerText.toLowerCase().includes(title.toLowerCase())) {
        li.innerText = title;
    wishlist.appendChild(li)
    }
}

  //function for removing books from bookbox
function bookbox_removeItem(title) {
    let wishlist = document.getElementById("wishlist_books");
    let li = document.getElementById(title.toLowerCase())
    wishlist.removeChild(li)
  }

window.onload = () => {
    loadAndFillBooks() // If no parameter is given, search is undefined
    FillBooksCategories()
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
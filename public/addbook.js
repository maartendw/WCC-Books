function addNewBook(item) {
    fetch("/api/books", {
        method: "POST",
        headers: {
            'content-type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(item)
    })
}

function getCategories(books){

    let lookup = {};
    const items = books;
    let result = [];

    for (let item, i = 0; item = items[i++];) {
    let category = item.category;

    if (!(category in lookup)) {
        lookup[category] = 1;
        result.push(category);
    }
    }
    console.log(result)
    
    const optionlist = document.getElementById("category_options")

    result.forEach(category => {
        const option = document.createElement("option")
        option.innerText = category
        optionlist.append(option)
    })
}

function FillCategories() {
    fetch('/api/books')
    .then(data => data.json())
    .then(books => {getCategories(books)})
}

function installOtherEventHandlers() {
    // Events to open and close menus
    // ...

    // Events to call loadAndFillBooks with a new search value
}

// }

window.onload = () => {
    FillCategories()
    const myform = document.getElementById('addbook')
    myform.addEventListener("submit", function(event){
        event.preventDefault();
        
        let newbook = {
            title: document.getElementById('newbooktitle').value,
            authors: document.getElementById('newbookauthors').value.split(", "),
            image: document.getElementById('newbookimage').value,
            rating: document.getElementById('newbookrating').value,
            numberrating: document.getElementById('newbooknumberrating').value,
            category: document.getElementById('newbookcategory').value
        }

        console.log(newbook)
        addNewBook(newbook)
        
})

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

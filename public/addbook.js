function addNewBook(item) {
    fetch("/api/books", {
        method: "POST",
        headers: {
            'content-type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(item)
        
    })
}

function getcategoriesdata() {
    fetch('/api/categories')
    .then(data => data.json())
    .then(categories => {getCategories(categories), countCategories(categories)})

}

function getCategories(categories){
    
    const optionlist = document.getElementById("category_options")

    categories.forEach( category => {
        const option = document.createElement("option")
        option.innerText = category.category
        optionlist.append(option)})

}


function countCategories(categories){
    const catsummary = document.getElementById("categorysummary")

    categories.forEach( category => {
        const li = document.createElement("li")
        li.innerText = category.category + ' (' + category.count + ')'
        catsummary.append(li)})

}


window.onload = () => {
    getcategoriesdata()
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

        addNewBook(newbook)
        myform.reset()
        
})

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

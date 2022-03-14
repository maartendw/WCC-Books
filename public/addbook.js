function addNewBook(item) {
    fetch("/api/books", {
        method: "POST",
        headers: {
            'content-type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(item)
    })
}



function installOtherEventHandlers() {
    // Events to open and close menus
    // ...

    // Events to call loadAndFillBooks with a new search value
}

// }

window.onload = () => {
    const myform = document.getElementById('addbook')
    myform.addEventListener("submit", function(event){
        event.preventDefault();
        
        let newbook = {
            title: document.getElementById('newbooktitle').value,
            authors: document.getElementById('newbookauthors').value.split(", "),
            image: document.getElementById('newbookimage').value,
            rating: document.getElementById('newbookrating').value,
            numberrating:document.getElementById('newbooknumberrating').value
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
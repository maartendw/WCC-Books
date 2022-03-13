function addNewBook() {
    fetch("/api/books", {
        method: "POST",
        headers: {
            'content-type':'application/json;charset=utf-8'
        },
        body: JSON.stringify({title:"Bla"})
    })
}

function getFieldValues(){
    let myForm = document.getElementById('addbook');
    let formData = new FormData(myForm);
    console.log(formData)
}


function installOtherEventHandlers() {
    // Events to open and close menus
    // ...

    // Events to call loadAndFillBooks with a new search value
}

window.onload = () => {

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
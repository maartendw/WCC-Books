function addNewBook(item) {
    fetch("/api/books", {
        method: "POST",
        headers: {
            'content-type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(item)
    })
}



// function getFieldValues(){
//     // let myForm = document.getElementById('addbook');
//     // let formData = new FormData(myForm);
//     // console.log(formData)

    

//     const form = document.getElementById('addbook');
//     const formData = new FormData(form);

//     console.log(formData)

//     formData.entries().forEach(element => {
//         console.log(element)
//     })
    
//     // for (let [key, value] of formData.entries()) { 
//     // formData.append(key,value)


// }

function installOtherEventHandlers() {
    // Events to open and close menus
    // ...

    // Events to call loadAndFillBooks with a new search value
}

const newbooktest = {
    title: "Garrett's test book",
    authors: [
        "Roger S. Pressman", "Garrett"
    ],
    image: "https://covers.openlibrary.org/b/olid/OL21794948M-M.jpg",
    rating: 5,
    numberrating: 420,
}

window.onload = () => {
    const myform = document.getElementById('addbook')
    myform.addEventListener("submit", function(event){
        event.preventDefault();
        // let myForm = event.target;
        // let fd = new FormData(myForm);
        addNewBook(newbooktest)

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
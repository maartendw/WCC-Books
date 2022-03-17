 function getbookratingsdata() {
    fetch('/api/books')
    .then(data => data.json())
    .then(books => {ratings(books)})
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
    const li = document.createElement("li")
    li.innerText = key + ' (' + lookup[key] + ')'
    catsummary.append(li)


  })    
}


function FillBooksCategories() {
    fetch('/api/books')
    .then(data => data.json())
    .then(books => {countCategories(books)})
}

function ratings(books) {
    const numbooks = []
    for (let book, i = 0; book = books[i++];) {
        numbooks.push(book.rating)

    }
    // console.log(numbooks)
    const count = {};

    for (const element of numbooks) {
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
    }
    
    console.log(count)
    const numbooksperrating = [count[1], count[2], count[3], count[4], count[5]]


    const ctx = document.getElementById('myChart1');
    const myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rating 1', 'Rating 2', 'Rating 3', 'Rating 4', 'Rating 5'],
            datasets: [{
                label: '# of books',
                data: numbooksperrating ,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
            
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                    
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    });
    
    //toggle for collapsable menus
    function togglefunction(id) {
        let smenu = document.getElementById(id);
        if (smenu.className === "submenu") {
            smenu.className = ('submenu hidden');
        } else {
            smenu.className = "submenu";
        }
    }
    

}




function installOtherEventHandlers() {
    // Events to open and close menus
    // ...

    // Events to call loadAndFillBooks with a new search value
}

window.onload = () => {
    FillBooksCategories()
    installOtherEventHandlers()
    getbookratingsdata()
}


function getbookratingsdata() {
    fetch('/api/books')
    .then(data => data.json())
    .then(books => {ratings(books)})
}

function getbookcategorydata() {
    fetch('/api/books')
    .then(data => data.json())
    .then(books => {categorydata(books)})
}

function FillBooksCategories() {
    fetch('/api/books')
    .then(data => data.json())
    .then(books => {countCategories(books)})
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




function ratings(books) {

    const ratings = []
    books.forEach( book => {
        ratings.push(book.rating)
    })
    
    const ratingcount = {};
    for (const i of ratings) {
    if (ratingcount[i]) {
        ratingcount[i] += 1;
    } else {
        ratingcount[i] = 1;
    }
    }
    

    const ctx = document.getElementById('myChart1');
    const myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rating 1', 'Rating 2', 'Rating 3', 'Rating 4', 'Rating 5'],
            datasets: [{
                label: '# of books per rating',
                data: Object.values(ratingcount),
                backgroundColor: [
                    'rgba(240,128,128,0.2)',
                    'rgba(255,127,80, 0.4)',
                    'rgba(255,99,71, 0.6)',
                    'rgba(255,0,0, 0.8)',
                    'rgba(139,0,0, 1)'
            
                ]
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

function categorydata(books) {
 
    const categories = []
    books.forEach( book => {
        categories.push(book.category)
    })
    
    const countcats = {};
    for (const category of categories) {
    if (countcats[category]) {
        countcats[category] += 1;

    } else {
        countcats[category] = 1;
    }
    }
    

    const ctx = document.getElementById('myChart2');
    const myChart2 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(countcats),
            datasets: [{
                label: '# of books per category',
                data: Object.values(countcats),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(60, 179, 113, 0.5)',
                    'rgba(180, 180, 180, 0.5)'
                ]
            
            }]
        },
        options: {
            responsive: false
        }
    });
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
    getbookcategorydata()
}


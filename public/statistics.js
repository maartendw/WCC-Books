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
    
    const numbooksperrating = [count[1], count[2], count[3], count[4], count[5]]


    const ctx = document.getElementById('myChart1');
    const myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rating 1', 'Rating 2', 'Rating 3', 'Rating 4', 'Rating 5'],
            datasets: [{
                label: '# of books per rating',
                data: numbooksperrating ,
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
    const numbookspercategory = []
    for (let b, i = 0; b = books[i++];) {
        numbookspercategory.push(b.category)

    }
    const countcats = {};

    for (const cat of numbookspercategory) {
    if (countcats[cat]) {
        countcats[cat] += 1;

    } else {
        countcats[cat] = 1;
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


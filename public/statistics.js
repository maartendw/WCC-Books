
function getcategoriesdata() {
    fetch('/api/categories')
    .then(data => data.json())
    .then(categories => {categoriesscount(categories), countCategories(categories)})

}

function getratingsdata() {
    fetch('/api/ratings')
    .then(data => data.json())
    .then(ratings => {ratingscount(ratings)})
}

function categoriesscount(categories) {
    
    const categorieslabels = []
    const categoriesdata = []
    categories.forEach( category => {
        categoriesdata.push(category.count)
        categorieslabels.push(category.category)
    })

    const ctx = document.getElementById('myChart2');
    const myChart2 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: categorieslabels,
            datasets: [{
                label: '# of books per category',
                data: categoriesdata,
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

function countCategories(categories){

    const catsummary = document.getElementById("categorysummary")

    categories.forEach( category => {
        const li = document.createElement("li")
        li.innerText = category.category + ' (' + category.count + ')'
        catsummary.append(li)})

}


function ratingscount(ratings) {
    const ratingsdata = []
    ratings.forEach( rating => {
        ratingsdata.push(rating.count)
    })

    const ctx = document.getElementById('myChart1');
    const myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rating 1', 'Rating 2', 'Rating 3', 'Rating 4', 'Rating 5'],
            datasets: [{
                label: '# of books per rating',
                data: ratingsdata,
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



window.onload = () => {
    getratingsdata()
    getcategoriesdata()
}


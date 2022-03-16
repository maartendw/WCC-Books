function getbookratings() {
    console.log('GET request')
    fetch("/api/books/stats", {
        method: "GET",
        headers: {
            'content-type':'application/json;charset=utf-8'
        },
    })
    .then(res => console.log(res))
    .then(data => console.log(JSON.stringify(data)))

}



const ctx = document.getElementById('myChart1');
const myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Rating 1', 'Rating 2', 'Rating 3', 'Rating 4', 'Rating 5'],
        datasets: [{
            label: '# of books',
            data: [12, 19, 3, 5, 2],
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

function installOtherEventHandlers() {
    // Events to open and close menus
    // ...

    // Events to call loadAndFillBooks with a new search value
}

window.onload = () => {

    installOtherEventHandlers()
    getbookratings()
}


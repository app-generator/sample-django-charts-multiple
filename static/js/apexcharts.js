userCreated.then((response) => {
    let options = {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'Users created over month',
            data: response.map((data) => data.count)
        }],
        xaxis: {
            categories: response.map((data) => data.month)
        }
    }

    let chart = new ApexCharts(document.querySelector("#apex-line-chart"), options);

    chart.render();
})

productSales.then((response) => {
    let options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Products sold',
            data: response.map((data) => data.count)
        }],
        xaxis: {
            categories: response.map((data) => data.month)
        }
    }

    let chart = new ApexCharts(document.querySelector("#apex-bar-chart"), options);

    chart.render();
})

userPurchased.then((response) => {
    let options = {
        chart: {
            type: 'pie'
        },
        series: Object.values(response),
        labels: [
            'Total Users',
            'Total Purchased',
            'Purchased percentage'
        ]
    }

    let chart = new ApexCharts(document.querySelector("#apex-pie-chart"), options);

    chart.render();
})
function drawPieChart() {

    // Create the data table.
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Data');
    data.addColumn('number', 'Numbers');

    userPurchased.then((response) => {

        data.addRows([
            ['Total Users', response.total_users],
            ['Total Purchased', response.total_purchased],
            ['Purchased percentage', response.purchased_percentage]
        ])

        // Set chart options
        let options = {
            'width': 400,
            'height': 300
        };

        let chart = new google.visualization.PieChart(document.getElementById('google-pie-chart'));
        chart.draw(data, options);
    })
}

google.charts.load('current', {
    packages: ['corechart']
});

google.charts.setOnLoadCallback(drawPieChart);

// Line Charts

function drawLineChart() {

    // Create the data table.
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Users');

    userCreated.then((response) => {

        data.addRows(response.map((data) => [data.month, data.count]))

        // Set chart options
        let options = {
            'width': '100%',
            'height': 300
        };

        let chart = new google.visualization.LineChart(document.getElementById('google-line-chart'));
        chart.draw(data, options);
    })
}

google.charts.load('current', {
    packages: ['corechart']
});

google.charts.setOnLoadCallback(drawLineChart);

// Bar Charts

function drawBarChart() {

    productSales.then((response) => {
        let productSalesData = ['Month', 'Products sold'];

        let data = new google.visualization.arrayToDataTable(
            [productSalesData].concat(response.map((data) => [data.month, data.count]))
        );

        let options = {
            width: '100%',
            axes: {
                x: {
                    0: {
                        side: 'top',
                    }
                }
            },
            bar: {
                groupWidth: "90%"
            }
        };

        let chart = new google.charts.Bar(document.getElementById('google-bar-chart'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    })

};


google.charts.load('current', {
    packages: ['bar']
});

google.charts.setOnLoadCallback(drawBarChart);
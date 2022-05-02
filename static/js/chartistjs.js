userCreated.then((response) => {
    const data = {
        labels: response.map((data) => data.month),
        series: [{
            data: response.map((data) => data.count),
        }]
    };

    new Chartist.Line('#chartist-line-chart', data);
})

productSales.then((response) => {

    const data = {
        labels: response.map((data) => data.month),
        series: [{
            data: response.map((data) => data.count),
        }]
    };

    new Chartist.Bar('#chartist-bar-chart', data);

})

userPurchased.then((response) => {
    const data = {
        labels: [
            'Total Users',
            'Total Purchased',
            'Purchased percentage'
        ],
        series: Object.values(response),
    };

    const options = {
        seriesBarDistance: 10,
        width: '100%',
        height: '300px',
        labelInterpolationFnc: function (value) {
            return value[0]
        }
    }

    const responsiveOptions = [
        ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function (value) {
                return value;
            }
        }],
        ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
        }]
    ];

    new Chartist.Pie('#chartist-pie-chart', data, options, responsiveOptions);
})
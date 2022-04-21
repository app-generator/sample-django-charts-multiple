async function getData(url) {
    const res = await axios.get(url);

    return await res.data;
}

// Defining the values of the variables

let userPurchased = {};
let productSales = [];
let userCreated = [];

// Fetching data for users that have purchased products

userPurchased = getData('/api/user/stats/purcahsed');

// Fetching data for users created over month

userCreated = getData('/api/user/stats/users_created');

// Fetching data for products sold over month 

productSales = getData('/api/product/sales');

userCreated.then((response) => {
    const dataUserCreated = {
        labels: response.map((data) => data.month),
        datasets: [{
            label: 'Users that have purchased products',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: response.map((data) => data.count),
        }]
    };

    const configUserCreated = {
        type: 'line',
        data: dataUserCreated,
        options: {}
    };

    // Creating new chart

    new Chart(
        document.getElementById('user-created'),
        configUserCreated
    );
})

productSales.then((response) => {
    const dataProductSales = {
        labels: response.map((data) => data.month),
        datasets: [{
            label: 'Products sold',
            data: response.map((data) => data.count),
            borderWidth: 1
        }]
    };

    const configProductSales = {
        type: 'bar',
        data: dataProductSales,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    new Chart(
        document.getElementById('product-sales'),
        configProductSales
    );
});

userPurchased.then((response) => {
    const dataUserPurchased = {
        labels: [
            'Total Users',
            'Total Purchased',
            'Purchased percentage'
        ],
        datasets: [{
            label: 'Users created',
            data: Object.values(response),
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };


    const configUserPurchased = {
        type: 'pie',
        data: dataUserPurchased,
    };


    new Chart(
        document.getElementById('user-purchased'),
        configUserPurchased
    );
});
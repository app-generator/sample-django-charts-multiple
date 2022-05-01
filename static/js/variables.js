async function getData(url) {
    const res = await axios.get(url);

    return await res.data;
}

// Defining the values of the variables

let userPurchased = {};
let productSales = [];
let userCreated = [];

// Fetching data for users that have purchased products

userPurchased = getData('/api/user/stats/purchased');

// Fetching data for users created over month

userCreated = getData('/api/user/stats/users_created');

// Fetching data for products sold over month 

productSales = getData('/api/product/sales');
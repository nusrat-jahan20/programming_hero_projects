// number array map
const numbers = [12, 56, 34, 44, 96];

const half = numbers.map(x => x / 2);
console.log(half);

const oneThird = numbers.map(x => x / 3);
console.log(oneThird);

// string array map
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const firstLetter = friends.map(x => x[0]);
const length = friends.map(x => x.length);
console.log(firstLetter, length);

// array of objects map
const products = [
    {id: 1001, name: 'laptop', price: 45000},
    {id: 1002, name: 'mobile', price: 85000},
    {id: 1003, name: 'watch', price: 15000},
    {id: 1004, name: 'tablet', price: 20000}
];

const productName = products.map(x => x.name);
const productPrice = products.map(x => x.price);
const items = products.map(x => x);

console.log(productName, productPrice);
console.log(items);








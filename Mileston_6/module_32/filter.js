// number array filter
const numbers = [12, 26, 34, 47, 91, 144, 18, 55, 61, 1];

const bigNum = numbers.filter(x => x > 50);
console.log(bigNum);

const tiny = numbers.filter(x => x < 30);
console.log(tiny);

const even = numbers.filter(x => x % 2 === 0);
console.log(even);

// array of objects filter
const products = [
    {id: 1001, name: 'laptop', price: 45000},
    {id: 1002, name: 'mobile', price: 85000},
    {id: 1003, name: 'watch', price: 15000},
    {id: 1004, name: 'tablet', price: 20000}
];
const expensive = products.filter(x => x.price > 20000);
console.log(expensive);
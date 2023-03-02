const numbers = [12, 26, 35, 44, 91, 145, 18, 55, 61, 1];

const fives = numbers.find(x => x %5 === 0);
const allfives = numbers.filter(x => x %5 === 0);

console.log(fives);
console.log(allfives);

const products = [
    {id: 1001, name: 'laptop', price: 45000},
    {id: 1002, name: 'mobile', price: 85000},
    {id: 1003, name: 'watch', price: 15000},
    {id: 1004, name: 'tablet', price: 20000}
];

const cheap = products.find(x => x.price > 40000);
console.log(cheap);
// structure: .reduce(callback_function, initial value); 
const numbers = [23, 45, 10, 4, 31];

// const total = numbers.reduce((a, b) => a + b, 0);
const total = numbers.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
} , 0);

console.log('Summation of the array element is:', total);


// const totalMul = numbers.reduce((a, b) => a * b, 1);
const totalMul = numbers.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev * curr;
} , 1);

console.log('Multiplication of the array element is:', totalMul);


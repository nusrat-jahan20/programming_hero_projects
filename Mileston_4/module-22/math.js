// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// power
const result = Math.pow(2, 6);
console.log(result); 


// Math.abs()
const num1 = 30;
const num2 = 45;

const gap = Math.abs(num1 - num2);

if((gap) < 10) {
    console.log('Make friendship');
}
else {
    console.log('Can not make friendship');
}


// Math.round()
console.log(Math.round(0.9));

console.log(Math.round(5.92), Math.round(5.5), Math.round(5.4));

console.log(Math.round(-5.92), Math.round(-5.5), Math.round(-5.4));


// Math.ceil() 
console.log(Math.ceil(.95));

console.log(Math.ceil(4));

console.log(Math.ceil(7.004));

console.log(Math.ceil(-7.004));


// Math.floor
console.log(Math.floor(5.95));

console.log(Math.floor(5.05));

console.log(Math.floor(5));

console.log(Math.floor(-5.05));



// Math.random()
console.log('Here Numbers are:')
for(let i = 0; i < 10; i++) {
    const randomNumber =Math.round(Math.random()*15);
    console.log(randomNumber);
}

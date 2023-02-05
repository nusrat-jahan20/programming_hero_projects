function findFactorial(number) {
    let fact = 1;
    let i = number;
    while(i > 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}

var result = findFactorial(7);
console.log('Factorial is:', result);

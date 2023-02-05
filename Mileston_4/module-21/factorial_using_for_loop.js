function findFactorial(number) {
    let fact = 1;

    // decrementing 
    for(let i = number; i > 1; i--) {
        fact = fact * i;
    }

    // incrementing
    // for(let i = 1; i <= number; i++) {
    //     fact = fact * i;
    // }
    return fact;
}

var result = findFactorial(6);
console.log('Factorial is:', result);


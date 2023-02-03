// single perameter
function bringSingra(money) {
    console.log(money, 'taka disen');
    console.log('ai nen singra!');
}

var taka = 100
bringSingra(taka);


// multiple parameter
function add(num1, num2) {
    console.log('Adding', num1, '&', num2);
    sum = num1 + num2;
    console.log(sum);
}

add(43, 51);
 
// another
function adding(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    sum = a + b + c + d + e;
    console.log(sum);
}

adding(14, 28, 32, 43, 9);

// different case
function mul(a, b, c) {
    mul = a * b * c;
    console.log(mul);
}

mul(2, 4);

function multiplication(a, b, c) {
    result = a * b * c;
    console.log(result);
}

multiplication(2, 4, 7);
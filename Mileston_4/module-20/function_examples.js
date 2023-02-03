function getAvarage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const avarage = total / 3;
    return avarage;
}

const assignment1Marks = 50;
const assignment2Marks = 60;
const assignment3Marks = 55;

var myAvarage = getAvarage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My avarage so far', myAvarage);

// another one

function add(num1, num2) {
    total = num1 + num2;
    return total;
}

const result1 = add(12, 43);
const result2 = add(3, 17);
const result = add(result1, result2);
console.log(result);

// another one

function square(number) {
    const result = number * number;
    return result;
}

var numberValue = square(14);
console.log(numberValue);
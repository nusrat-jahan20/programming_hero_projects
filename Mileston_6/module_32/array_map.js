// old type
const numbers = [2, 5, 8, 3, 6];
const output = [];
for(const dell of numbers){
    const double = dell * 2;
    output.push(double);
}
// console.log(output);

// another 
const numberzs = [2, 5, 8, 3, 6];
const outputs = [];

const doubleNumber = number => number * 2;

for(const dell of numberzs){
    // const double = doubleItOld(dell);
    const double = doubleNumber(dell)
    outputs.push(double);
}

function doubleItOld(num) {
    return num * 2;
} 

// console.log(output);

/*-------------map function----------------*/ 

const doubleNumberz = number => number * 2;

// const makeDouble = numbers.map(doubleNumberz);
// const makeDouble = numbers.map(num => num * 2);
const makeDouble = numbers.map(x => x * 2);

console.log(makeDouble);


/*----------------------------------------*/

const fourTimes = [3, 5, 7, 2, 0].map(x => x * 4);
console.log(fourTimes)








function findSum(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum = sum + array[i];
        console.log(i, array[i], sum);
    }
    return sum;
}

let numbers = [12, 65, 22, 34, 78, 40];
let sumOfNumbers = findSum(numbers);
console.log('Sum of array elements is', sumOfNumbers);
function findOddNumbers(array) {
    let sum = 0;
    for(i = 0; i < array.length ; i++) {
        if(array[i] % 2 == 1) {
            sum = sum + array[i];
            // console.log(i, array[i], sum);
        }
    }
    return sum;
}

let numbers = [9, 65, 22, 34, 55, 13, 78, 47, 88];
let oddNumbersAre = findOddNumbers(numbers);
console.log('The sum of odd numbers are:', oddNumbersAre);
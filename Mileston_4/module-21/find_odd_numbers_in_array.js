function findOddNumbers(array) {
    for(i = 0; i < array.length ; i++) {
        if(array[i] % 2 == 1) {
            console.log(array[i]);
        }
    }
}

let numbers = [9, 65, 22, 34, 55, 13, 78, 47, 88];
findOddNumbers(numbers);
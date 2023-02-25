const squareNumber = (array) => {
    const square = array.map(x => x * x);
    let sum = 0;

    for(let i = 0; i < square.length; i++) {
        sum = sum + square[i];
    }
    const avg = sum / square.length;
    return avg;
}

const numbers = [2, 1, 0, 6, 9, 11, 3];
console.log(squareNumber(numbers));
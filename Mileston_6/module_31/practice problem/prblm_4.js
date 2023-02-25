const maxNum = (arr1, arr2) => {
    // const arr = arr1.concat(arr2);
    const arr = [...arr1, ...arr2];
    const maxNumber = Math.max(...arr);
    return maxNumber;
}

const numbers1 = [1, 22, 5];
const numbers2 = [6, 9, 10];

console.log(maxNum(numbers1, numbers2));
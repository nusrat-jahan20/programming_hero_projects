console.log(1);

console.log(2);

console.log(3);

const sum = add(5, 4);
console.log(sum);

setTimeout(doSomething, 2000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log('inside fetch!'))

console.log(5);

console.log(6);

console.log(7);

function add(a, b) {
    result = a + b;
    return result;
}

function doSomething() {
    console.log('setTimeOut')
}

const content = 'A variable declared with var is defined throughout the program. One of the issues with using the var keyword was redeclaring a variable. inside a block will also redeclare the variable outside the block.'

// .split()
let parts = content.split(' ');
// console.log(parts);

let sentence = content.split('.');
// console.log(sentence);

let letter = content.split('');
// console.log(letter);

// .slice()
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(26));

console.log(str.slice(4 , 19));

console.log(str.slice(-4));

console.log(str.slice(-9 , -2));

// substring()-------> same to slice()

console.log(str.substring(26));

console.log(str.substring(4 , 19));


// concat()

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2, '!'));

console.log(str2.concat(', ', str1, '!'));



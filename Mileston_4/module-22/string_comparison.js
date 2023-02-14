// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const userName = 'blacKPink';
const userInput = 'blaCkpinK';

console.log(userName.toUpperCase());
console.log(userInput.toUpperCase());

if(userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('Valid user');
}
else {
    console.log('Invalid user')
}

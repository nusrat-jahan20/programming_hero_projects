/*-------------------
    includes()
----------------------*/

 
const content = 'A variable declared with var is defined throughout the program. One of the issues with using the var keyword was redeclaring a variable inside a block will also redeclare the variable outside the block. Variable declared by let caNnot bE redeclared and must be declared before use whereas variables declared with var keyword are hoisted.'

// var doesExit = content.includes('will also redeclare');
// console.log(doesExit);

// var doesExit = content.includes('Iss');
// console.log(doesExit);

// let contentLowerCase = content.toLowerCase() ;
let doesExit = 'CannOt be';
// let doesExitLowerCase = doesExit.toLowerCase();
// let search = contentLowerCase.includes(doesExitLowerCase);
// console.log(search);

let doesExitOneLine = content.toLowerCase().includes(doesExit.toLowerCase());
console.log(doesExitOneLine);



/*-------------------
    indexOf()
---------------------*/

console.log(content.indexOf('fine'));
console.log(content.indexOf('BlOcK'));

if(content.indexOf('able') == -1) {
    console.log('Does not exit');
}
else{
    console.log('Exit')
}



/*-------------------
     startsWith()
---------------------*/

console.log(content.startsWith('a variable'));
console.log(content.startsWith('A variable'));


/*-------------------
     endsWith()
---------------------*/

const fileName = 'mypic.jpg'
console.log(fileName.endsWith('png'));
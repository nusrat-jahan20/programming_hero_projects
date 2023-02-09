// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 

var variable1 = 17;
var variable2 = 'Nusrat';
var variable3 = [1, 3, 4, 7, 5];

// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 

for(i = 1; i <= 100; i++) {
    console.log(i);
}

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

for(i = 50; i <= 80; i++) {
    if(i % 2 == 1) {
        console.log(i);
    }
}

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 

function addition(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}
var output = addition(123, 583, 45);
console.log(output);

/*--------------------------
      function & object
---------------------------*/

// ১. ফাংশন কি জিনিস। এইটা কি কাজে লাগে এবং কিভাবে ফাংশন ডিক্লেয়ার করতে হয় 

// function is a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

function addition(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}

// ২. ফাংশনে কেন প্যারামিটার ব্যবহার করা হয় 
// A parameter is used to describe the entire population being studied. 

// ৩. কেন ফাংশন থেকে রিটার্ন করা হয় 
// In general functions return values because they are relevant to the flow of your programme.

// ৪. রিটার্ন এর পর কিছু না লিখলে কি হয় 
// undefined 

// ৫. রিটার্ন এর পর কি কি জিনিস লেখা যায় 
// variable, number, string, boolean.

// ৬. difference between function declaration and function expression.
// A function expression is very similar to and has almost the same syntax as a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.

// ৭. regular function vs arrow function
// regular functions are constructible, they can be called using the new keyword. However, the arrow functions are only callable and not constructible.

// ৮. ফাংশন এবং লুপ এর মধ্যে পার্থক্য কি?
// A loop is an embodiment of a piece of code we wish to have repeated, a function is an embodiment of a piece of code that we can run anytime just by calling it into action. 

// ৯. অবজেক্ট এবং array এর মধ্যে ডিফারেন্স কি 
//  Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

// ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান পাওয়া যেতে পারে? 
// 3 ways

var shopingCart = {
    books: 3,
    sunglass: 1,
    notebooks: 5,
    mouse: 1,
    pen: 15
}

console.log(shopingCart);

// get object property values (1)
var countBook = shopingCart.books;
console.log('Books =', countBook);

// get object property values (2)
var countNotebook = shopingCart['notebooks'];
console.log('Notebooks =', countNotebook);

// get object property values (3)
var propertyName = 'pen';
var countPen = shopingCart[propertyName];
console.log('Pens =', countPen);
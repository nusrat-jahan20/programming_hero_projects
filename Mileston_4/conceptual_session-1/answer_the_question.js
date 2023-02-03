// 1. What is javascript?
// A: javascript is a scripting language.

// 2.How Javascript works?
// A: JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

// 3.What is Variable?
// A: Variables are containers for storing data values.

// 4. How to declear variable?
// A: var name = 'nusrat';

// 5. How to change or update the value of variable?
// A: var name = 'nusrat';
//    name = 'raita';

// 6. Types of veriable/? How to know the type of variable?
// A: 1) Numeric 2)String 3)Boolean

//    var age = 23;
//    var name = 'nusrat';
//    var isStudent = true;
//    var what;
   
//    console.log(typeof(age));
//    console.log(typeof(name));
//    console.log(typeof(isStudent));
//    console.log(typeof(what));

// 7. How many data types are there?
// A: (1) Primitive Types---> i) Numbers
//                           ii) String
//                           iii) Boolean
//                           iv) Null
//                           v) Undefined
//    (2) Non-Primitive Types----> i) Objects
//                                ii) Arrays

// 8. Variable naming convention (what to do)?
// A: 1. Letter(A-Z) & (a-z)
//    2. Number {0-9}
//    3. UnderScore (_)
//    4. Doller ($)

// 9. Variable naming convention (not to do)?
// A: 1. Don't use key-words
//    2. Number can't use at starting
//    3. Can't use space
//    4. Js is case sensitive. Variable name should be same to same.

// 10. How to +, -, *, /, % between two variable?
// A: var num1 = 45;
//    var num2 = 9;

//    sum = num1 + num2;
//    console.log(sum);    

//    sub = num1 - num2;
//    console.log(sub);    

//    mul = num1 * num2;
//    console.log(mul);    

//    div = num1 / num2;
//    console.log(div);  

//    rem = num1 % num2;
//    console.log(rem);  

// 11. How do +=, -=, *=, /= work?
// A: var num1 = 45;

//    num1 += 10
//    console.log(num1);

//    num1 -= 10
//    console.log(num1);

//    num1 *= 10
//    console.log(num1);

//    num1 /= 10
//    console.log(num1);

// 12. How ++, -- works?
// A: var num1 = 30;

//   num1++; 
//   console.log(num1); 

//   num1--; 
//   console.log(num1--); 

// 13. What is parseInt, parseFloat, toFixed?
// A: var price = '34';
//    var priceNumber = parseInt(price); 
//    console.log(priceNumber);

//    var gpa = '3.4123456'; 
//    var gpaNumber = parseFloat(gpa);
//    gpaNumber = gpaNumber.toFixed(3); // .toFixed() string return kore!!
//    var gpaNumber1 = parseFloat(gpaNumber);
//    var gpa = '3.4123456'; 
//    console.log(gpaNumber1);

// 14. What is array? How does it works? How to declear array?
// A: An array is a collection of elements of the same type placed in contiguous memory locations that can be individually referenced by using an index to a unique identifier.
// var items = [pen, bag, clock, lamp, notebook];

// 15. How to know the array length of an array?
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    console.log(items.length);

// 16. All about index....Which index comes first? 
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    console.log(items);
   
//    var index1 = items[0];
//    var index2 = items[1];
//    var index3 = items[2];
//    var index4 = items[3];
//    var index5 = items[4];
//    console.log(index1, index2, index3, index4, index5);

//    index 0 comes first

//    items[3] = 'book';
//    console.log(items);

// 17. What does it means by the value of an array index equal to -1?
// A: The value of an array index equal to -1 means that the array element is not in that array.

// 18. How to search the array element using index?
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    var index3 = items[2];
//    console.log(index3);

// 19. How to change the value of an index?
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    console.log(items);
//    items[3] = 'book';
//    console.log(items);

// 20. If you have an array element than how you find the index of the element?
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    var positionIndex = items.indexOf('notebook');
//    console.log(positionIndex);

// 21. What does it mean when an array is undefined?
// A: ????

// 22. How to add an element to an array at the last position?
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    items.push('book');
//    console.log(items);

// 23. How to remove an element to an array at the last position?
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    items.pop();
//    console.log(items);

// 24. How to add an element to an array at the first position?
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    items.unshift('book');
//    console.log(items);

// 25. How to remove an element to an array at the first position?
// A: var items = ['pen', 'bag', 'clock', 'lamp', 'notebook'];
//    items.shift();
//    console.log(items);

// 26. What does these means >, <, ==, !=, <=, >=, ===, !==, &&, ।। ........???
// A: console.log(4>5);
//    console.log(5>4);
//    console.log(9<3);
//    console.log(3<9);
//    console.log(9<9);
//    console.log(9==3);
//    console.log(3==3);
//    console.log(9!=3);
//    console.log(3!=3);
//    console.log(9<=3);
//    console.log(3<=3);
//    console.log(9>=3);
//    console.log(3>=3);
//    console.log(3>4 && 4==4);
//    console.log(3>4 || 4==4);
   
// 27. Let's think you have x amount of money. If you have more than 80,000,then you will buy a Macbook if more than 60,000 then you will buy gaming laptop, if you have more than 40,000 then you will buy Lenovo Yoga, if you have more than 20,000 then you will buy an used laptop, otherwise you will use your mobile phone.
// A: var x = 15000;
   
//    if(x >= 80000) {
//         console.log('Buy a MacBook');
//    } 
//    else if(x >= 60000) {
//         console.log('Buy gaming laptop');
//    }
//    else if(x >= 40000) {
//         console.log('Buy Lenovo Yoga');
//    }
//    else if(x >= 30000) {
//         console.log('Buy used laptop');
//    }
//    else {
//         console.log('Use mobile phone');
//    }

// 28. output 'Aske amar mon valo nai!' 39 times
A: for (var i = 0; i >= 9; i++) {
        console.log('Aske amar mon valo nai!');
   }

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
// A: for (var i = 1; i <= 39; i++) {
//         console.log(i, 'Aske amar mon valo nai!');
//    }

// 29. How while loop works?
// A:  var i = 0;
//     while (i < 5) {
//         console.log('hello! nusrat') ;
//         i++;
//     }

// 30. How for loop works?
// A: for (var i = 1; i <= 39; i++) {
//         console.log(i, 'Aske amar mon valo nai!');
//    }

// 31. while loop e variable change na korle ki hoy?
// A: infinite loop hoy jabe.

// 32. show number 58 to 98
// A: for (i = 58; i <= 98; i++) {
//         console.log(i);
//     }

// 33. show all even number between 412 to 456.
// A: for (i = 412; i <= 456; i++) {
//       if(i % 2 == 0) {
//         console.log(i);
//       }
//     }

// 34. show all odd number between 581 to 623.
// A: for (i = 581; i <= 623; i++) {
//       if(i % 2 == 1) {
//         console.log(i);
//       }
//     }

// 35. Difference between while and for loop.
// A: The for and while loops are both conditional statements. A for loop is a single-line command that will be executed repeatedly. While loops can be single-lined or contain multiple commands for a single condition. only writing syntex is deferance between for and while loop.

// 36. তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
// A: var learning = ['variable', 'array', 'mathematical-operation', 'condition', 'for-loop'];
//    for(i = 0; i < learning.length; i++) {
//         console.log(learning[i]);
//    }

// 37. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
// A: var phone_model = ['Samsung', 'Nokia', 'Redmi', 'Oppo', 'Apple', 'One Plus'];
//    var i = 0; 
//    while (i < phone_model.length) {
//        console.log(phone_model[i]) ;
//        i++;
//    }

// 38. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
// A:   for(i = 30; i <= 86; i++) {
//           if(i == 44) {
//                break;
//           }
//           console.log(i);
//      }

// 39. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
// A:   var book_price = [225, 300, 100, 120, 330, 150, 80, 150];
//      for(i = 0; i < book_price.length; i++) {
//           if (book_price[i] > 200) {
//                continue;
//           }
//           console.log(book_price[i]);
//      }














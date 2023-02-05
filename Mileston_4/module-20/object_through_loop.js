var shopingCart = {
    books: 3,
    sunglass: 1,
    notebooks: 5,
    mouse: 1,
    pen: 15
}

var propertyName = Object.keys(shopingCart);
// console.log(propertyName);
var propertyValue = Object.values(shopingCart)
// console.log(propertyValue);

// for loop
for(var i = 0; i < propertyValue.length; i++) {
    // console.log(propertyName[i], ':', propertyValue[i]);
}

// for in loop 
const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
  console.log(numbers[x]);
}









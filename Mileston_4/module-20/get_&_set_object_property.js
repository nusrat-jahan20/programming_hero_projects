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

// get all object properties
var allProperty = Object.keys(shopingCart);
console.log(allProperty);

// get all object values
var allValues = Object.values(shopingCart);
console.log(allValues);

// set object property values (1)
shopingCart.sunglass = 3;
console.log(shopingCart);

// set object property values (2)
shopingCart['books'] = 7;
console.log(shopingCart);

// set object property values (2)
shopingCart[propertyName] = 10;
console.log(shopingCart);












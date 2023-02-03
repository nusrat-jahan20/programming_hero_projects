function add(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
    return sum;
}

var total = add(42, 28);
console.log(total);


// another one
function bringSingra(money) {
    var eachSingra = 10;
    var quantity = money / eachSingra;
    return quantity;
}

var myTaka = 150;
var Singaras = bringSingra(myTaka);
console.log('We got', Singaras, 'singras');
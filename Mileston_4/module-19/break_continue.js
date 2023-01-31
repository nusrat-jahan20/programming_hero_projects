// break means bus thke namen ar jabo na!!
var numbers = [45, 87, 89, 56, 99, 167, 51, 25, 09, 94];

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] > 100) {
        break;
    }
    console.log([i], '=', numbers[i]);
}


// continue means digital skip ;0
var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook', 'pencilBox'];

for(i = 0; i < items.length; i++) {
    if(items[i] == 'pen') {
        continue;
    }
    console.log([i], '=', items[i]);
}

var numbers = [45, 87, 89, 56, 99, 167, 51, 25, 09, 94];

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] > 80) {
        continue;
    }
    console.log([i], '=', numbers[i]);
}
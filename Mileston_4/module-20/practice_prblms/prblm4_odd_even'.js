// has return + has parameter

function odd_even(number) {
    if(number % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

var result = odd_even(52);
console.log(result);


// no return + has parameter

function odd_even1(number) {
    if(number % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

odd_even1(5);
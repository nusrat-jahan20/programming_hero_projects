let num1 = 00, num2 = 00;

const intervalid = setInterval(() => {
    ++num2;
    if (num2 < 11) {
        console.log(num1, num2);
    }
    else {
        ++num1;
        num2 = 1;
        console.log(num1, num2);
    }
}, 1000);


var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2) {
    if(num1 > num3) {
        console.log(num1, 'is the largest number.');
    }
    else {
        console.log(num3, 'is the largest number.');
    }
}
else if(num2 > num1) {
    if(num2 > num3) {
        console.log(num2, 'is the largest number.');
    }
    else {
    console.log(num3, 'is the largest number.');
    }
}
else if(num3 > num1) {
    if(num3 > num2) {
        console.log(num3, 'is the largest number.');
    }
    else {
    console.log(num2, 'is the largest number.');
    }
}
else {
    console.log('All numbers are equal.');
}
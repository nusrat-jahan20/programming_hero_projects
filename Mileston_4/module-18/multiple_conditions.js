var isGraduated = true;

if(isGraduated == true) {
    console.log('Sadia will marry you ;)');
}
else {
    console.log('Bier boyosh hoy ni!');
}

// multiple condition

var isGraduated = true;
var salary = 26000;

if(isGraduated == true && salary >= 40000) {
    console.log('Sadia will marry you :)');
}
else {
    console.log('Bier boyosh hoy ni!');
}

var isGraduated = true;
var salary = 26000;
var car = 1;

if(isGraduated == true && salary >= 40000 && car >= 1) {
    console.log('Sadia will marry you ;)');
}
else {
    console.log('Bier boyosh hoy ni!');
}

var isGraduated = false;
var salary = 60000;

if(isGraduated == true || salary >= 50000) {
    console.log('Sadia will marry you ;)');
}
else {
    console.log('Bier boyosh hoy ni!');
}

// mixed condition

var isGraduated = false;
var salary = 60000;
var car = 2;

if(isGraduated == true || salary >= 50000 && car > 1) {
    console.log('Sadia will marry you ;)');
}
else {
    console.log('Bier boyosh hoy ni!');
}

var isGraduated = true;
var salary = 60000;
var car = 0;
var building10Tola = 1;

if(isGraduated == true && salary >= 50000 || car > 1 && building10Tola ==1) {
    console.log('Sadia will marry you ;)');
}
else {
    console.log('Bier boyosh hoy ni!');
}
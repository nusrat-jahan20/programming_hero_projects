// Leap Years are any year that can be exactly divided by 4  (such as 2016, 2020, 2024, etc)
// except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
// except if it can be exactly divided by 400, then it is (such as 2000, 2400)
function isLeapYear(year) {
    if(year % 400 == 0) {
        return true;
    }
    else if(year % 100 == 0) {
        return false;
    }
    else if(year % 4 == 0) {
        return true;
    }
    return false;
}

let leapYear = isLeapYear(1934);
console.log('Is leap year !?', leapYear);
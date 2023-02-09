function convertToFahrenheit(celsius) {
    var fahrenheit = ((celsius * 9) / 5) + 32;
    return fahrenheit;
}

var output = convertToFahrenheit(37);
console.log(output);
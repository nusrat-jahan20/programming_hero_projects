function convertToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

var output = convertToCelsius(98.6);
console.log(output);
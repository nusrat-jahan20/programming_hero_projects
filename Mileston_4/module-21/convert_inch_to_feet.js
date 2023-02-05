function convertToFeet(inchs) {
    const feet = inchs / 12;
    return feet;
}

let myFeet = convertToFeet(66);
console.log('My feet', myFeet);

let babaFeet = convertToFeet(84);
console.log('Baba feet', babaFeet);
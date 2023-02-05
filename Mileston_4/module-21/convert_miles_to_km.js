function convertToKm(miles) {
    const kilometer = miles * 1.60934;
    return kilometer;
}

let distance = convertToKm(2);
console.log('Distance between home and office =', distance);
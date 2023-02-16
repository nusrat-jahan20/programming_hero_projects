const jim = 824;
const dela = 99;
const chinku = 727;

if( jim > dela && jim > chinku ) {
    console.log('Jim');
}
else if( dela > chinku) {
    console.log('Dela');
}
else {
    console.log('Chinku');
}

// another aproach

let winner = Math.max(jim, dela, chinku);
if(winner == jim) {
    console.log('Jim');
}
else if(winner == dela) {
    console.log('Dela');
}
else {
    console.log('Chinku');
}
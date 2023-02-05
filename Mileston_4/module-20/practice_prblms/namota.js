function multiplicationTable(number) {
    for (i = 1; i <= 10; i++) {
        result = number * i;
        console.log(number, '*', i, '=', result);
    }
}
multiplicationTable(13);
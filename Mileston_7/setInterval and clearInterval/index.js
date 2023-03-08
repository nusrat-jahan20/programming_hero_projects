console.log(1)

console.log(2)

let num = 0

const intervalid = setInterval(() => {
    num++
    if (num < 11) {
        console.log(num)
    }
    else {
        console.log('stop');
        clearInterval(intervalid)
    }
}, 1000)


console.log(4)

console.log(5)

console.log(6)

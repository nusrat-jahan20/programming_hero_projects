const getPromise = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log(num);

    if(num > 5) {
        resolve(56665);
    }
    else {
        reject('No data available');
    }
})

getPromise
    .then(data => console.log(data))
    .catch(err => console.error('ERR:',err));


    
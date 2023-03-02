const users = [ {id: 1, name: 'abul', job: 'doctor'} ];

console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1001, name: 'babul', job: 'leader'},
        {id: 1002, name: 'kabul', job: 'doctor'} 
    ]
}
console.log(data.data[0].job);

const user = {
    id: 3002,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '35/A Kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postoffice: 'cantonment',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}
const info1 = user.address.street.second;
const info2 = user.address.stret?.second;
console.log(info1, info2);
function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData2(data))
}

function displayData2(users) {
    const ul = document.getElementById('list-container');
    for(const user of users) {
        console.log(user.email);
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }
}
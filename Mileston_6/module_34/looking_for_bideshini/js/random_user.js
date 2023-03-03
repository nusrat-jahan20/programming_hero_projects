const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayData(data));
}

const displayData = (user) => {
    document.getElementById('gender').innerText = user.results[0].gender; 
    
    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    document.getElementById('name').innerText = name;

    document.getElementById('street').innerText = user.results[0].location.street.number+ ' ' + user.results[0].location.street.name + ',';
    
    document.getElementById('city').innerText = user.results[0].location.city;

    document.getElementById('state').innerText = user.results[0].location.state;

    document.getElementById('country').innerText = user.results[0].location.country;

    const image = document.getElementById('image');
    image.innerHTML = `
        <h3>Photo of ${name}:</h3>
        <img src="${user.results[0].picture.large}">
    `
}


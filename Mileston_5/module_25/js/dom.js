const liCollection = document.getElementsByTagName("li");
console.log(liCollection);

for (const li of liCollection) {
    console.log(li);
}

const allHeading = document.getElementsByTagName("h1");

for (const h1 of allHeading) {
    console.log(h1.innerText);
}

const places = document.getElementsByClassName("important");

for (const important of places) {
    console.log(important.innerText);
    
}

const fruits = document.getElementById("fruits-title");
console.log(fruits);
fruits.innerText = "Fruits Changed by JavaScript";
fruits.style.color = 'green'

const menuList = document.querySelectorAll('#menu-list li');
console.log(menuList);

const fruitsList = document.querySelector('#fruits-list li');
console.log(fruitsList);

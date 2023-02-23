/*-----add new list in ul-----*/ 


// where to add
const placeList = document.getElementById('place-list');

// what to add
const li = document.createElement('li');
li.innerText = 'New place added';

// add the child
placeList.appendChild(li);


/*-----add new section with innerText-----*/ 


// where to add
const container = document.getElementById('container');

// what to add
const section = document.createElement('section');

// added heading to the section
const h1 = document.createElement('h1');
h1.innerText = 'My Comfort Dress'
section.appendChild(h1);

// added unordered list to the section
const ul = document.createElement('ul');

// added list to ul
const li1 = document.createElement('li');
li1.innerText = 'Borkha';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Hijab';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Niqab';
ul.appendChild(li3);

// add the child
section.appendChild(ul);

// add the child
container.appendChild(section);


/*-----add another new section with innerHTML-----*/ 

// where to add
const newContainer = document.getElementById('container');

// what to add
const newSection = document.createElement('section');
newSection.innerHTML = `
    <h1>Dinner Menu</h1>
    <ul>
        <li>Kacchi</li>
        <li>Morog Polao</li>
        <li>Salad</li>
        <li>Borhani</li>
    </ul>
`

// add the child
container.appendChild(newSection);

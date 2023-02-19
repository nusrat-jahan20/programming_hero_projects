// option-2
function makeYellow() {
    document.body.style.backgroundColor='yellow';
}

// option-3
const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlueButton;

function makeBlueButton() {
    document.body.style.backgroundColor='blue';
}

// option-4
const greenButton = document.getElementById('make-green');
greenButton.onclick = function makeGreenButto() {
    document.body.style.backgroundColor='green';
};

// option-5 
const purpleButton = document.getElementById('make-purple');
purpleButton.addEventListener('click', function makePurpleButton() {
    document.body.style.backgroundColor='purple';
})

// option-6
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePinkButton);

function makePinkButton() {
    document.body.style.backgroundColor='pink';
}
// task-2
const h2s =  document.getElementsByTagName('h2');
for (const h2 of h2s) {
    h2.style.color = '#FF589B'
}

// task-3
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = '#ffe9f8';
backpack.style.padding = '15px';
backpack.style.borderRadius = '6px'

// task-4
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '20px'
}

// task-5
function btn_clicked() {
    console.log('Button clicked');
}

// task-6
document.getElementById('delete-1').addEventListener('click', function() {
    document.getElementById('column-1').style.display = 'none';
})
document.getElementById('delete-2').addEventListener('click', function() {
    document.getElementById('column-2').style.display = 'none';
})
document.getElementById('delete-3').addEventListener('click', function() {
    document.getElementById('column-3').style.display = 'none';
})
document.getElementById('delete-4').addEventListener('click', function() {
    document.getElementById('column-4').style.display = 'none';
})
document.getElementById('delete-5').addEventListener('click', function() {
    document.getElementById('column-5').style.display = 'none';
})
document.getElementById('delete-6').addEventListener('click', function() {
    document.getElementById('column-6').style.display = 'none';
})

// task-7----------------->prblm
const email = document.getElementById('exampleInputEmail1')
email.addEventListener('keyup', function(event) {
    const value = event.target.value
    const submit = document.getElementById('submit')
    if(value === 'email') {
        submit.removeAttribute('disabled')
    }
    else if(value !== 'email') {
        submit.setAttribute('disabled')
    }
})

// task-8
function hover1(img) {
    img.src = "images/bags/bag-1.jpg"
}
function hover2(img) {
    img.src = "images/bags/bag-2.jpg"
}
function hover3(img) {
    img.src = "images/bags/bag-3.jpg"
}

// task-9
document.getElementById('subscribe').addEventListener('dblclick', function() {
    document.getElementById('subscribe').style.backgroundColor = '#ffd5d5'
})



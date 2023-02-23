document.getElementById('item-3').addEventListener('click', function() {
    console.log('item-3 one clicked')
})

document.getElementById('item-3').addEventListener('click', function(event) {
    console.log('item-3 two clicked')
    // event.stopImmediatePropagation()
})

document.getElementById('item-3').addEventListener('click', function() {
    console.log('item-3 three clicked')
})

document.getElementById('item-3').addEventListener('click', function(event) {
    console.log('item-3 four clicked');
    event.stopPropagation();
})

document.getElementById('ul').addEventListener('click', function(event) {
    console.log('ul clicked')
})

document.getElementById('section').addEventListener('click', function() {
    console.log('section clicked')
})

document.getElementById('body').addEventListener('click', function() {
    console.log('body of the intire html clicked')
})
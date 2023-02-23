document.getElementById('input-field').addEventListener('keyup', function(event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('delete-btn');

    if(text !== 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled');
    }
})

document.getElementById('delete-btn').addEventListener('click', function() {
    const secretInfo = document.getElementById('secret-info');
    secretInfo.style.display = 'none';
})
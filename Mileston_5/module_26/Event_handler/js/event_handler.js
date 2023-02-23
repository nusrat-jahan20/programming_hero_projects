// option-1
function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handeled by function attached on onclick attribute';
} 

// option-2
document.getElementById('event-listener').addEventListener('click', function() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by add Event listener button';
})

// option-3
document.getElementById('btn-update').addEventListener('click', function() {
    const inputText = document.getElementById('input-field');
    const inputTextValue = inputText.value ;

    document.getElementById('input-text-display').innerText = inputTextValue;
    inputText.value = ' '
})
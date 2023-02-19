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
document.getElementById('btn-update').addEventListener('click',function() {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const inputTextDisplay = document.getElementById('input-text-display');
    inputTextDisplay.innerText = inputText;
    inputField.value = ' '
})

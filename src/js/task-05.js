const refs = {
    inputField: document.querySelector('#name-input'),
    outputField: document.querySelector('#name-output'),
}

function onInput(event) {
    refs.outputField.textContent = event.currentTarget.value || 'Anonymous';
}

refs.inputField.addEventListener('input', onInput);
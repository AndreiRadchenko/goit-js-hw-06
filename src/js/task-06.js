const inputFieldRefs = document.querySelector('#validation-input');

function onInputBlur({currentTarget: {value, classList}}) {
    if (value.length === +inputFieldRefs.dataset.length) {
        classList.add('valid');
        classList.remove('invalid');
    }
    else {
        classList.add('invalid');
        classList.remove('valid');
        }
    }

inputFieldRefs.addEventListener('blur', onInputBlur);
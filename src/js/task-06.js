const inputFieldRefs = document.querySelector('#validation-input');

function onInputBlur({currentTarget: {value, classList}}) {
    if (value.length === 6) {
        if (classList.contains('invalid')) {
            classList.replace('invalid', 'valid');
        }
        else {
            classList.add('valid');
        }
    }
    else {
        if (classList.contains('valid')) {
            classList.replace('valid', 'invalid');
        }
        else {
            classList.add('invalid');
        }
    }
}

inputFieldRefs.addEventListener('blur', onInputBlur);
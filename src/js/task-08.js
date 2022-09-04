const formRef = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    
    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields');
        return;
    }

    const userCredentials = {
        [email.name]: email.value,
        [password.name]: password.value,
    }
    console.log(userCredentials);
    event.currentTarget.reset();
}

formRef.addEventListener('submit', onFormSubmit);

const email = document.getElementById('email');
const button = document.querySelector('.button');
const input = document.querySelector('input')
const errorIcon = document.querySelector('.error');
const errorText = document.querySelector('.text');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const showMsg = () => {
    if(input.value.match(mailFormat)) {
        input.style.borderColor = 'hsl(75, 26%, 48%)';
        errorText.style.color = '';
        errorIcon.style.display = 'none';
    } else {
        errorText.textContent = 'Please provide a valid email';
        input.style.borderColor = 'hsl(0, 93%, 68%)';
        errorText.style.color = 'hsl(0, 93%, 68%)';
        errorIcon.style.display = 'inline';
    }
}

const check = () => {
    if(email.value !== '') {
        errorText.textContent = '';
        showMsg()
    } else {
        errorIcon.style.display = 'inline';
        input.style.borderColor = 'hsl(0, 93%, 68%';
        errorText.textContent = 'Please enter your email';
        errorText.style.color = 'hsl(0, 93%, 68%)';
    }
}

button.addEventListener('click', check)


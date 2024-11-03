const passwordDisplay = document.getElementById('password-display');
const numberButtons = document.querySelectorAll('.number-button');

const correctPassword = '1018';

let incorrectAttempts = 0;
let password = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        password += button.textContent;
        passwordDisplay.textContent += '*';

        if (password.length === correctPassword.length) {
            if (password === correctPassword) {
                window.location.href = 'palao.html';
            } else {
                incorrectAttempts++;
                alert('Contraseña incorrecta');
                if (incorrectAttempts >= 5) {
                    passwordDisplay.textContent = ''; 
                    password = '';
                    incorrectAttempts = 0; 
                } else {
                    passwordDisplay.textContent = ''; 
                    password = ''; 
                }
            }
        }
    });
});
